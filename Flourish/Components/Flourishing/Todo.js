import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { CheckBox, Icon } from 'react-native-elements';

export default class Todo extends React.Component {

    frequencyConverter = (days) => {
        const days_int = parseInt(days)
        if (days_int === 7) {
            return "Weekly"
        } else if (days_int === 30){
            return "Monthly"
        } else if (days_int === 14) {
            return "Biweekly"
        } else {
            return `Every ${days} days`
        }
    }

    componentDidMount() {

        this.setState({
            name: this.props.name,
            task: this.props.task,
            frequency: this.props.freq,
            date: this.props.date,
            checking: this.props.checked
        })
    }

    state = {
        name: '',
        task: '',
        frequency: 0,
        date: new Date(),
        checking: true
    }

    toggleCheckBox = () => {
        this.setState(prevState => ({ checking: !prevState.checking }));
        const freq = this.state.freq;
        // if (this.state.checking == true) {
        //     this.setState(prevState => ({'date': new Date(prevState.date.getTime() +  freq*24*60*60*1000)}))
        // } else {
        //     this.setState(prevState => ({'date': new Date(prevState.date.getTime() -  freq*24*60*60*1000)}))
        // }
    }

    render() {
        const {name, task, frequency, date, checking} = this.state
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    // height: 70,
                    borderRadius: 10,
                    backgroundColor: '#ffffff',
                    marginVertical: 10,
                    marginHorizontal: 5,
                    paddingVertical: 10,
                    // paddingHorizontal: 8,

                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                }}>
                <CheckBox
                        checkedIcon='check-circle-o'
                        uncheckedIcon='circle-o'
                        checked={checking}
                        onPress={this.toggleCheckBox}
                        size={23}
                        containerStyle={{margin: 0, padding:0}}
                        checkedColor='#ef5e85'
                    >
                    </CheckBox>
                <View style={{ flex: 0.4 }}>
                    
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: '#505050',
                            flexWrap: 'wrap',
                        }}
                    >
                        {name}
                    </Text>
                </View>

                <View style={{
                    height: 40,
                    width: 2,
                    backgroundColor: '#cacaca',
                    marginHorizontal: 16,
                }}/>

                <View style={{ flex: 0.5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <View style={{ flex: 0.6, height: '100%', flexDirection:'column'}}>
                        <Text style={{fontSize: 15, }}>{task}</Text>
                        <Text style={{color: '#cacaca'}}>{this.frequencyConverter(frequency)}</Text>
                    </View>
                    <View style={{ flex: 0.4, paddingVertical:0, alignItems:'flex-end'}}>
                        <Text style={{fontSize: 15, color:'#ef5e85', fontWeight: 'bold'}}>
                            {`${monthNames[date.getMonth()].slice(0, 3)}. ${date.getDate()}`}
                        </Text>

                    </View>
                </View>
            </View>
        )
    }
}
