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
                "id": "0",
                "img": "https://i1.kknews.cc/SIG=52b418/26r5000002r82qro63ro.jpg",
                "name": "Red",
                "binomial": "Echeveria Apus",
                "intro": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius ipsum eveniet laboriosam dolore perspiciatis, numquam iusto provident nobis, commodi voluptatem repellat nemo, quae voluptate facilis fuga labore in? Debitis, minus!",
                "maintain": [
                    {
                        "key": 0,
                        "title": "SUNSHINE",
                        "spec": "Full daylight",
                    },
                    {
                        "key": 1,
                        "title": "WATERING",
                        "spec": "1 per week",
                    },
                ],
                "reminder": [
                    {
                        "key": 0,
                        "name": "Red",
                        "task": "WATERING",
                        "freq": "7",
                        "date": new Date('May 4, 2020 17:29:03'),
                    },
                    {
                        "key": 1,
                        "name": "Red",
                        "task": "FERTILIZING",
                        "date": new Date('May 4, 2020 17:29:03'),
                        "freq": "7",
                    },
                ],
            },
            {
                "id": "1",
                "img": "https://www.zhifure.com/upload/images/2018/3/27164120681.jpg",
                "name": "The Succulents",
                "binomial": "Echeveria Apus",
                "intro": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius ipsum eveniet laboriosam dolore perspiciatis, numquam iusto provident nobis, commodi voluptatem repellat nemo, quae voluptate facilis fuga labore in? Debitis, minus!",
                "maintain": [
                    {
                        "key": 0,
                        "title": "SUNSHINE",
                        "spec": "Full daylight",
                    },
                    {
                        "key": 1,
                        "title": "WATERING",
                        "spec": "1 per week",
                    },
                ],
                "reminder": [
                    {
                        "key": 0,
                        "name": "The Succulents",
                        "task": "WATERING",
                        "freq": "14",
                        "date": new Date(Date.now()),
                    },
                    {
                        "key": 1,
                        "name": "The Succulents",
                        "task": "FERTILIZING",
                        "date": new Date(Date.now()),
                        "freq": "14",
                    },
                ],
            },
            {
                "id": "2",
                "img": "https://duorou.zw3e.com/uploads/allimg/180828/3-1PRQ12410227.jpg",
                "name": "Greens",
                "binomial": "Echeveria Apus",
                "intro": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius ipsum eveniet laboriosam dolore perspiciatis, numquam iusto provident nobis, commodi voluptatem repellat nemo, quae voluptate facilis fuga labore in? Debitis, minus!",
                "maintain": [
                    {
                        "key": 0,
                        "title": "SUNSHINE",
                        "spec": "Full daylight",
                    },
                    {
                        "key": 1,
                        "title": "WATERING",
                        "spec": "1 per week",
                    },
                ],
                "reminder": [
                    {
                        "key": 0,
                        "name": "Greens",
                        "task": "WATERING",
                        "freq": "7",
                        "date": new Date('November 11, 2018 22:44:53'),
                    },
                    {
                        "key": 1,
                        "name": "Greens",
                        "task": "FERTILIZING",
                        "date": new Date('November 11, 2018 22:44:53'),
                        "freq": "7",
                    },
                ],
            },
            {
                "id": "3",
                "img": "https://i.epochtimes.com/assets/uploads/2020/05/shutterstock_1714301299-600x400.jpg",
                "name": "Yeah",
                "binomial": "Echeveria Apus",
                "intro": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius ipsum eveniet laboriosam dolore perspiciatis, numquam iusto provident nobis, commodi voluptatem repellat nemo, quae voluptate facilis fuga labore in? Debitis, minus!",
                "maintain": [
                    {
                        "key": 0,
                        "title": "SUNSHINE",
                        "spec": "Full daylight",
                    },
                    {
                        "key": 1,
                        "title": "WATERING",
                        "spec": "1 per week",
                    },
                ],
                "reminder": [
                    {
                        "key": 0,
                        "name": "Yeah",
                        "task": "WATERING",
                        "freq": "7",
                        "date": new Date('October 29, 2020 10:03:00'),
                    },
                    {
                        "key": 1,
                        "name": "Yeah",
                        "task": "FERTILIZING",
                        "date": new Date('October 30, 2020 10:03:00'),
                        "freq": "7",
                    },
                ],
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

const PhotoTabScreenGenerator = (tab) => {
    return (
        <PhotoTabScreen tab={tab}/>
    );
}

const Tab = createBottomTabNavigator();

class MyTabs extends React.Component{

    takePhotoButton = React.createRef()

    state = {
        tab: "Flourishing"
    }

    handleTabChange = (tabName) => {
        this.setState({
            tab: tabName
        })
    }

    takePhoto = (tabName) => {
        this.handleTabChange(tabName)

    }

    render(){
        return (
            <Tab.Navigator tabBarOptions={{
                activeTintColor: ActiveTintColor,
                inactiveTintColor: InactiveTintColor
            }}>
                <Tab.Screen
                    onPress={() => this.handleTabChange("Flourishing")}
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
                    onPress={() => this.handleTabChange("Garden")}
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
                    onPress={() => this.handleTabChange("Photo")}
                    name="Photo"
                    component={() => PhotoTabScreenGenerator(this.state.tab)}

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
                    onPress={() => handleTabChange("Plantpedia")}
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
                    onPress={() => handleTabChange("Settings")}
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

}

export default function App() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}

