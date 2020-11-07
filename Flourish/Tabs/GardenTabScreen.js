import * as React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View, ScrollView } from 'react-native';
import PlantCard from '../Components/Garden/PlantCard'

export default function GardenTabScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.cardContainer}>
                    <PlantCard
                        data={{
                            "img": "https://i1.kknews.cc/SIG=52b418/26r5000002r82qro63ro.jpg",
                            "name": "My Red Plant",
                            "binomial": "Echeveria Apus",
                        }}
                    />
                    <PlantCard
                        data={{
                            "img": "https://i1.kknews.cc/SIG=52b418/26r5000002r82qro63ro.jpg",
                            "name": "My Red Plant",
                            "binomial": "Echeveria Apus",
                        }}
                    />
                    <PlantCard
                        data={{
                            "img": "https://i1.kknews.cc/SIG=52b418/26r5000002r82qro63ro.jpg",
                            "name": "My Red Plant",
                            "binomial": "Echeveria Apus",
                        }}
                    />
                    <PlantCard
                        data={{
                            "img": "https://i1.kknews.cc/SIG=52b418/26r5000002r82qro63ro.jpg",
                            "name": "My Red Plant",
                            "binomial": "Echeveria Apus",
                        }}
                    />
                    <PlantCard
                        data={{
                            "img": "https://i1.kknews.cc/SIG=52b418/26r5000002r82qro63ro.jpg",
                            "name": "My Red Plant",
                            "binomial": "Echeveria Apus",
                        }}
                    />
                    <PlantCard
                        data={{
                            "img": "https://i1.kknews.cc/SIG=52b418/26r5000002r82qro63ro.jpg",
                            "name": "My Red Plant",
                            "binomial": "Echeveria Apus",
                        }}
                    />
                    <PlantCard
                        data={{
                            "img": "https://i1.kknews.cc/SIG=52b418/26r5000002r82qro63ro.jpg",
                            "name": "My Red Plant",
                            "binomial": "Echeveria Apus",
                        }}
                    />
                    <PlantCard
                        data={{
                            "img": "https://i1.kknews.cc/SIG=52b418/26r5000002r82qro63ro.jpg",
                            "name": "My Red Plant",
                            "binomial": "Echeveria Apus",
                        }}
                    />
                    
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        // paddingTop: 25,
        marginTop: StatusBar.currentHeight || 0,
        flex: 1,
        backgroundColor: '#f0f0f0',
        paddingTop: 14,
        // alignItems: 'center',
        // justifyContent: 'center',
    },

    cardContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginHorizontal: 16,
        marginTop: 20,
        marginBottom: 14,
        flexWrap: 'wrap'
    }
});