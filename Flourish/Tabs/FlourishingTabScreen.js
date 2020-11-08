import * as React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View, ScrollView, SectionList } from 'react-native';
import Todo from '../Components/Flourishing/Todo';


export default function FlourishingTabScreen() {
    const renderItem = ({ item }) => {
        // console.log(item);
        return (
            <Todo data={{ 'name': item.name, 'task': item.task, 'freq': item.freq, 'date': item.date, 'checked': item.checked }} />
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            {/* <View> */}
            <SectionList
                style={styles.sectionContainer}
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={item => renderItem(item)}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.sectionTitle}>{title}</Text>
                )}
            />
            {/* </View> */}
        </SafeAreaView>
    );
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
        paddingHorizontal: 16,
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


const TODAY_DATA = [
    {
        'id': '0',
        'name': 'The Green Ball',
        'task': 'Watering',
        'freq': '1/week',
        'date': 'Nov. 7',
        'checked': 'false',
    },
    {
        'id': '1',
        'name': 'The Red Ball',
        'task': 'Watering',
        'freq': '1/week',
        'date': 'Nov. 7',
        'checked': 'true',
    },
    {
        'id': '2',
        'name': 'The Blue Ball',
        'task': 'Watering',
        'freq': '1/week',
        'date': 'Nov. 7',
        'checked': 'true',
    },
    {
        'id': '3',
        'name': 'The Orange Ball',
        'task': 'Watering',
        'freq': '1/week',
        'date': 'Nov. 8',
        'checked': 'true',
    },
]


const WEEK_DATA = TODAY_DATA;

const DATA = [
    {
        title: "Today",
        data: TODAY_DATA,
    },
    {
        title: "This Week",
        data: WEEK_DATA,
    }
]
