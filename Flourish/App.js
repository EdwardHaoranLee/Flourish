'use strict'




import React from 'react';
import {View, Image} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import FlourishingTabScreen from './Tabs/FlourishingTabScreen'
import GardenTabScreen from './Tabs/GardenTabScreen'
import PlantpediaTabScreen from './Tabs/PlantpediaTabScreen'
import SettingsTabScreen from './Tabs/SettingsTabScreen'
import PhotoTabScreen from './Tabs/PhotoTabScreen'
import StorageAccess from "./Gateways/StorageAccess";

const IS_TESTING = true
const ActiveTintColor = "#ef5e85"
const InactiveTintColor = "#cacaca"

function loadMyPlants(test) {
    if (test){
        return [
            {
                'id': '0',
                'name': 'The Green Ball',
                'task': 'Watering',
                'freq': 7,
                "img": "https://i1.kknews.cc/SIG=52b418/26r5000002r82qro63ro.jpg",
                'date': new Date('October 29, 2020 10:03:00'),
                "binomial": "Echeveria Apus",
            },
            {
                'id': '1',
                'name': 'The Red Ball',
                'task': 'Watering',
                'freq': 7,
                "img": "https://www.zhifure.com/upload/images/2018/3/27164120681.jpg",
                'date': new Date('May 4, 2020 17:29:03'),
                "binomial": "Echeveria Apus",
            },
            {
                'id': '2',
                'name': 'The Blue Ball',
                'task': 'Watering',
                'freq': 7,
                "img": "https://duorou.zw3e.com/uploads/allimg/180828/3-1PRQ12410227.jpg",
                'date': new Date(Date.now()),
                "binomial": "Echeveria Apus",
            },
            {
                'id': '3',
                'name': 'The Orange Ball',
                'task': 'Watering',
                'freq': 7,
                "img": "https://i.epochtimes.com/assets/uploads/2020/05/shutterstock_1714301299-600x400.jpg",
                'date': new Date('November 3, 2018 22:44:53'),
                "binomial": "Echeveria Apus",
            },

        ]
    } else {
        const access = new StorageAccess({})
        return access.readPlants()
    }
}

let myPlants = loadMyPlants(IS_TESTING)
// let myReminders

const FlourishingTabScreenGenerator = () => {
    return (
        <FlourishingTabScreen plants={myPlants}/>
    );
}

const GardenTabScreenGenerator = () => {
    return (
        <GardenTabScreen plants={myPlants}/>
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
                            // shadowColor: "#00000050",
                            // shadowOffset: {
                            //     width: 0,
                            //     height: 0,
                            // },
                            // shadowOpacity: 0.3,
                            // shadowRadius: 3.84,
                            // elevation: 3,
                            borderWidth: 3,
                            borderColor: '#ef5e85',
                        }}>
                            <Image
                                source={require("./assets/camera.png")}
                                style={{
                                    // width: 40,
                                    // height: 40,
                                    alignContent: 'center',
                                    justifyContent: 'center',
                                    // position: 'absolute',
                                    // bottom: 10, // space from bottombar
                                    height: 50,
                                    width: 50,
                                    borderRadius: 58,
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

