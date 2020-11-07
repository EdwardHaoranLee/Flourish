import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

export default class PlantCard extends React.Component {
    render() {
        return (
            <TouchableOpacity style={{
                // flex: 0.4,
                height: 200,
                width: 150,
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: 26,

                backgroundColor: '#fff',
                borderRadius: 10,

                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 4,
                },
                shadowOpacity: 0.32,
                shadowRadius: 5.46,

                elevation: 9,
            }}>
                <View style={{
                    width: '100%',
                    height: '70%',
                    // flex:0.7,
                    backgroundColor: '#123123',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                }}>
                    <Image
                        style={{
                            width: '100%',
                            height: '100%',
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                        }}
                        source={{ uri: this.props.data.img }}
                    />
                </View>
                <View style={{
                    flexDirection: 'column',
                    padding: 8,
                    width: '100%',
                    height: '30%',
                }}>
                    <Text style={{
                        fontSize: 17,
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