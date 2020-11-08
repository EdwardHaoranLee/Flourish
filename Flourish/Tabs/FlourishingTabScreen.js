import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View, ScrollView, SectionList } from 'react-native';
import Todo from '../Components/Flourishing/Todo';


export default class FlourishingTabScreen extends React.Component {
    componentDidMount() {
        this.setState({
            plants: this.props.plants,

        })
        console.log(this.state.plants)
        this.getAllReminders();
    }

    state = {
        plants: [],
        reminders: [],
        todayReminders: [],
        weekReminders: [],
    }

    getAllReminders = () => {
        let plants = this.props.plants;
        let todayReminders = [];
        let weekReminders = [];
        let dayMili = 24 * 60 * 60 * 1000
        let today = new Date(Date.now());
        let week = new Date(today.getTime() + 7 * dayMili);
        for (let i = 0; i < plants.length; i++) {
            for (let j = 0; j < plants[i].reminder.length; j++) {
                let r = plants[i].reminder[j];
                if (r.date.getTime() < today.getTime() + 1 * dayMili && r.date.getTime() > today.getTime() - dayMili) {
                    todayReminders.push(r);
                } else if (r.date.getTime() < week.getTime()) {
                    weekReminders.push(r);
                }
            }
        }

        this.setState({ todayReminders: todayReminders, weekReminders: weekReminders });
        this.setState({
            reminders: [{
                title: "Today",
                data: todayReminders,
            },
            {
                title: "This Week",
                data: weekReminders,
            }]
        });
    }


    renderItem = ({ item }) => {
        return (
            <Todo name={item.name} task={item.task} freq={item.freq} date={item.date} checked={false} />
        );
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <SectionList
                    style={styles.sectionContainer}
                    sections={this.state.reminders}
                    keyExtractor={(item, index) => item + index}
                    renderItem={item => this.renderItem(item)}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.sectionTitle}>{title}</Text>
                    )}
                />
            </SafeAreaView>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        // paddingTop: 25,
        marginTop: StatusBar.currentHeight || 0,
        flex: 1,
        backgroundColor: '#f0f0f0',
        // paddingTop: 14,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    sectionContainer: {
        flex: 1,
        paddingHorizontal: 11,
        // paddingBottom: 500,
        // marginVertical: 20,
        // marginBottom: 0,
        // borderWidth: 1,
    },
    sectionTitle: {
        textAlign: 'left',
        fontSize: 34,
        fontWeight: 'bold',
        color: '#ef5e85',
        marginTop: 20,
        marginBottom: 10,
    },
});


// const TODAY_DATA = [
//     {
//         'id': '0',
//         'name': 'The Green Ball',
//         'task': 'Watering',
//         'freq': 7,
//         'date': new Date("October 13, 2014 11:13:00"),
//         'checked': false,
//     },
//     {
//         'id': '1',
//         'name': 'The Red Ball',
//         'task': 'Watering',
//         'freq': 7,
//         'date': new Date("October 29, 2020 10:03:00"),
//         'checked': true,
//     },
//     {
//         'id': '2',
//         'name': 'The Blue Ball',
//         'task': 'Watering',
//         'freq': 30,
//         'date': new Date("May 29, 2019 22:03:47"),
//         'checked': true,
//     },
//     {
//         'id': '3',
//         'name': 'The Orange Ball',
//         'task': 'Watering',
//         'freq': 7,
//         'date': new Date("October 29, 2020 10:03:00"),
//         'checked': true,
//     },
// ]


// const WEEK_DATA = TODAY_DATA;

// const DATA = [
//     {
//         title: "Today",
//         data: TODAY_DATA,
//     },
//     {
//         title: "This Week",
//         data: WEEK_DATA,
//     }
// ]
