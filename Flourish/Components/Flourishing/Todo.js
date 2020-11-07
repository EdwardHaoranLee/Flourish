import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
// import { CheckBox } from 'native-base';

export default class SimpleCircleButton extends React.Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: 70,
                    borderRadius: 10,
                    backgroundColor: '#ffffff',
                    marginVertical: 7,
                    paddingVertical: 10,
                    paddingHorizontal: 16,

                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                }}>
                {/* <CheckBox checked={true}></CheckBox> */}
                <View style={{ flex: 0.5 }}>
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: '#505050',
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

                <View style={{ flex: 0.5, flexDirection: 'row', alignItems:'center', justifyContent:'space-around'}}>
                    <View style={{ flex: 0.6, height: '100%', flexDirection:'column'}}>
                        <Text style={{fontSize: 15, }}>{this.props.data.task}</Text>
                        <Text style={{color: '#cacaca'}}>{this.props.data.freq}</Text>
                    </View>
                    <View style={{ flex: 0.4, paddingVertical:0, alignItems:'flex-end'}}>
                        <Text style={{fontSize: 15, color:'#ef5e85', fontWeight: 'bold',}}>{this.props.data.date}</Text>
                    </View>
                </View>
            </View>
        )
    }
}
