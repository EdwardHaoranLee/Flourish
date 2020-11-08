import * as React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PlantCard from '../Components/Garden/PlantCard'

export default function GardenTabScreen() {
    const renderItem = ({ item }) => {
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
        // } else {
        //     return (
        //         <View style={{
        //             justifyContent: "center",
        //             alignItems: 'center',
        //         }}>
        //             <TouchableOpacity style={styles.addPlantIcon}>
        //                 <MaterialCommunityIcons name="plus" color="#CACACA" size={40} />
        //             </TouchableOpacity>
        //         </View>
        //     )
        // }
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList style={styles.cardContainer}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
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
        paddingHorizontal: 16,
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
    }
});


const DATA = [
    {
        "id": "0",
        "img": "https://i1.kknews.cc/SIG=52b418/26r5000002r82qro63ro.jpg",
        "name": "My Red Plant",
        "binomial": "Echeveria Apus",
    },
    {
        "id": "1",
        "img": "https://i1.kknews.cc/SIG=52b418/26r5000002r82qro63ro.jpg",
        "name": "My Red Plant Plant Plant Plant",
        "binomial": "Echeveria Apus",
    },
    {
        "id": "2",
        "img": "https://i1.kknews.cc/SIG=52b418/26r5000002r82qro63ro.jpg",
        "name": "My Red Plant",
        "binomial": "Echeveria Apus",
    },
    {
        "id": "3",
        "img": "https://i1.kknews.cc/SIG=52b418/26r5000002r82qro63ro.jpg",
        "name": "My Red Plant",
        "binomial": "Echeveria Apus",
    },
    {
        "id": "4",
        "img": "https://i1.kknews.cc/SIG=52b418/26r5000002r82qro63ro.jpg",
        "name": "My Red Plant",
        "binomial": "Echeveria Apus",
    },
    // { "id": "5" }
]