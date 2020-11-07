import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function FlourishingTabScreenGenerator() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Flourish!</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();

export default function FlourishingTabScreen() {
    return (
        <Tab.Screen name="Flourishing" component={FlourishingTabScreenGenerator} />
    );
}