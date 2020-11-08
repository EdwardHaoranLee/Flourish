import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';


export default class PlantCard extends React.Component {
    navigateToPlantScreen = () => {
        // navigation.navigate('Details')
    }

    render() {
        return (
            <TouchableOpacity style={{
                flex: 0.8,
                height: 150,
                // width: '100%',
                flexDirection: 'row',
                alignItems: 'flex-start',
                marginBottom: 8,
                marginHorizontal: 10,

                backgroundColor: '#fff',
                borderRadius: 10,

                // shadowColor: "#000",
                // shadowOffset: {
                //     width: 0,
                //     height: 4,
                // },
                // shadowOpacity: 0.32,
                // shadowRadius: 5.46,

                // elevation: 9,
            }}>
                <View style={{
                    // width: '50%',
                    // height: '100%',
                    // flex:0.7,
                    flex: 1,
                    // backgroundColor: '#123123',
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius:10, 
                    padding: 8,
                }}>
                    <Image
                        style={{
                            // width: '100%',
                            // height: '100%',
                            flex: 1,
                            // borderTopLeftRadius: 10,
                            // borderBottomLeftRadius:10, 
                            borderRadius: 10,
                        }}
                        source={{ uri: this.props.data.img }}
                    />
                </View>
                <View style={{
                    flexDirection: 'column',
                    padding: 8,
                    // width: '100%',
                    // height: '30%',
                    flex: 1,
                    // flexWrap: 'wrap'
                }}>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                    }}>
                        {this.props.data.name}
                    </Text>
                    <Text style={{
                        fontSize: 12,
                    }}>
                        {this.props.data.binomial}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}