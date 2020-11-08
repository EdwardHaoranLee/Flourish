import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PlantCard from '../Components/Garden/PlantCard'
import {Component} from "react";

export default class GardenTabScreen extends React.Component{

    componentDidMount() {
        this.setState({
            data: this.props.plants
        })
    }

    state = {
        data: [],
    }

    renderItem = ({ item }) => {
        // if (item.id < DATA.length - 1) {
            return (
                <PlantCard
                    data={{
                        "img": item.img,
                        "name": item.name,
                        "binomial": item.binomial,
                    }}
                />
            );
    }

    render(){
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.sectionTitle}>My Garden</Text>
                <FlatList style={styles.cardContainer}
                          data={this.state.data}
                          renderItem={this.renderItem}
                          keyExtractor={item => item.id}
                />
            </SafeAreaView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight || 0,
        flex: 1,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
    },

    cardContainer: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 11,
        marginTop: 20,
    },
    addPlantIcon: {
        width: 50,
        height: 50,
        marginTop: 20,
        marginBottom: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderRadius: 25,
        borderColor: '#CACACA',
    },
    sectionTitle: {
        textAlign: 'left',
        fontSize: 34,
        fontWeight: 'bold',
        color: '#ef5e85',
        marginTop: 20,
        marginBottom: 10,
        marginHorizontal: 16,
    },
});


// const DATA = [
//     {
//         "id": "0",
//         "img": "https://i1.kknews.cc/SIG=52b418/26r5000002r82qro63ro.jpg",
//         "name": "My Red Plant",
//         "binomial": "Echeveria Apus",
//     },
//     {
//         "id": "1",
//         "img": "https://www.zhifure.com/upload/images/2018/3/27164120681.jpg",
//         "name": "The Succulents",
//         "binomial": "Echeveria Apus",
//     },
//     {
//         "id": "2",
//         "img": "https://duorou.zw3e.com/uploads/allimg/180828/3-1PRQ12410227.jpg",
//         "name": "Greens",
//         "binomial": "Echeveria Apus",
//     },
//     {
//         "id": "3",
//         "img": "https://i.epochtimes.com/assets/uploads/2020/05/shutterstock_1714301299-600x400.jpg",
//         "name": "Yeah",
//         "binomial": "Echeveria Apus",
//     },
//     {
//         "id": "4",
//         "img": "https://i.zw3e.com/zw_news_map/550/2017121/1512527973023359675.jpg",
//         "name": "Leaves",
//         "binomial": "Echeveria Apus",
//     },
//     // { "id": "5" }
// ]