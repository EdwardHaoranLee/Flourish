'use strict'
import * as React from 'react';
import {View, Image} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import FlourishingTabScreen from './Tabs/FlourishingTabScreen'
import GardenTabScreen from './Tabs/GardenTabScreen'
import PlantpediaTabScreen from './Tabs/PlantpediaTabScreen'
import SettingsTabScreen from './Tabs/SettingsTabScreen'
import PhotoTabScreen from './Tabs/PhotoTabScreen'

// const
const ActiveTintColor = "#ef5e85"
const InactiveTintColor = "#cacaca"

const FlourishingTabScreenGenerator = () => {
    return (
        <FlourishingTabScreen />
    );
}

const GardenTabScreenGenerator = () => {
    return (
        <GardenTabScreen />
    );
}

const PlantpediaTabScreenGenerator = () => {
    return (
        <PlantpediaTabScreen />
    );
}

const SettingsTabScreenGenerator = () => {
    return (
        <SettingsTabScreen />
    );
}

const PhotoTabScreenGenerator = () => {
    return (
        <PhotoTabScreen />
    );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: ActiveTintColor,
            inactiveTintColor: InactiveTintColor
        }}>
            <Tab.Screen
                name="Flourishing"
                component={FlourishingTabScreenGenerator}
                options={{
                    tabBarLabel: "Flourishing",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="water" color={color} size={size} />
                    ),
                    // tabBarBadge: 0,
                }}
            />
            <Tab.Screen
                name="Garden"
                component={GardenTabScreenGenerator}
                options={{

                    tabBarLabel: "Garden",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="flower" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Photo"
                component={PhotoTabScreenGenerator}
                // style={}
                options={{
                    tabBarLabel: "Photo",
                    tabBarIcon: () => (
                        <View style={{
                            position: 'absolute',
                            bottom: 0, // space from bottombar
                            height: 70,
                            width: 70,
                            borderRadius: 58,
                            backgroundColor: '#ffffff',
                            justifyContent: 'center',
                            alignItems: 'center',
                            shadowOpacity: 0.3,
                            shadowOffset:{width:0,height:0},
                            shadowColor: "#000000",
                        }}>
                            <Image
                                source={require("./assets/camera.png")}
                                style={{
                                    // width: 40,
                                    // height: 40,
                                    alignContent: 'center',
                                    position: 'absolute',
                                    bottom: 11, // space from bottombar
                                    height: 50,
                                    width: 50,
                                    borderRadius: 58,
                                    justifyContent: 'center',
                                    alignItems: 'center',

                                }}
                            />               
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Plantpedia"
                component={PlantpediaTabScreenGenerator}
                options={{
                    tabBarLabel: "Plantpedia",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="magnify" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsTabScreenGenerator}
                options={{
                    tabBarLabel: "Settings",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="tune" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}

// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import TabNavigation from './TabNavigation'
//
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//       <TabNavigation />
//     </View>
//   );
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
