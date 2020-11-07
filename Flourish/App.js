'use strict'
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FlourishingTabScreen from './Tabs/FlourishingTabScreen'
import GardenTabScreen from './Tabs/GardenTabScreen'
import PlantpediaTabScreen from './Tabs/PlantpediaTabScreen'
import SettingsTabScreen from './Tabs/SettingsTabScreen'

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

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Flourishing" component={FlourishingTabScreenGenerator} />
            <Tab.Screen name="Garden" component={GardenTabScreenGenerator} />
            <Tab.Screen name="Plantpedia" component={PlantpediaTabScreenGenerator} />
            <Tab.Screen name="Settings" component={SettingsTabScreenGenerator} />
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
