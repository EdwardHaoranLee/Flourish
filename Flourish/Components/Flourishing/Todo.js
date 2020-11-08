import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { CheckBox, Icon } from 'react-native-elements';

export default class Todo extends React.Component {
    constructor(props) {
        super(props);
        // console.log(this.props);
        this.state = {
            checking: this.props.data.checked ==="true",
        }
    }

    toggleCheckBox = () => {
        this.setState(prevState => ({ checking: !prevState.checking }));
    }

    render() {
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
                        checked={this.state.checking}
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
                        {this.props.data.name}
                    </Text>
                </View>

                <View style={{
                    height: 40,
                    width: 2,
                    backgroundColor: '#cacaca',
                    marginHorizontal: 16,
                }}></View>

                <View style={{ flex: 0.5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <View style={{ flex: 0.6, height: '100%', flexDirection: 'column' }}>
                        <Text style={{ fontSize: 15, }}>{this.props.data.task}</Text>
                        <Text style={{ color: '#cacaca' }}>{this.props.data.freq}</Text>
                    </View>
                    <View style={{ flex: 0.4, paddingVertical: 0, alignItems: 'flex-end' }}>
                        <Text style={{ fontSize: 15, color: '#ef5e85', fontWeight: 'bold', }}>{this.props.data.date}</Text>
                    </View>
                </View>
            </View>
        )
    }
}
