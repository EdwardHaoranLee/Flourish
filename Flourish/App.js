'use strict'
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const FlourishingTabScreenGenerator = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Flourish!</Text>
        </View>
    );
}

const GardenTabScreenGenerator = () => {
    return (
        <View>

        </View>
    )
}

const PlantpediaTabScreenGenerator = () => {
    return (
        <View>

        </View>
    )
}

const SettingsTabScreenGenerator = () => {
    return (
        <View>

        </View>
    )
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
