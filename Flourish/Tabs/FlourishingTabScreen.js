import * as React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View, ScrollView } from 'react-native';
import Todo from '../Components/Flourishing/Todo';


export default function FlourishingTabScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Today</Text>
                    <Todo data={{'name':'The Green Ball', 'task': 'Watering', 'freq': '1/week', 'date': 'Nov. 7'}}/>
                    <Todo data={{'name':'The Green Ball', 'task': 'Watering', 'freq': '1/week', 'date': 'Nov. 7'}}/>
                </View>
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>This Week</Text>
                    <Todo data={{'name':'The Green Ball', 'task': 'Watering', 'freq': '1/week', 'date': 'Nov. 7'}}/>
                    <Todo data={{'name':'The Green Ball', 'task': 'Watering', 'freq': '1/week', 'date': 'Nov. 7'}}/>
                    <Todo data={{'name':'The Green Ball', 'task': 'Watering', 'freq': '1/week', 'date': 'Nov. 7'}}/>
                    <Todo data={{'name':'The Green Ball', 'task': 'Watering', 'freq': '1/week', 'date': 'Nov. 7'}}/>
                    <Todo data={{'name':'The Green Ball', 'task': 'Watering', 'freq': '1/week', 'date': 'Nov. 7'}}/>
                    <Todo data={{'name':'The Green Ball', 'task': 'Watering', 'freq': '1/week', 'date': 'Nov. 7'}}/>
                    <Todo data={{'name':'The Green Ball', 'task': 'Watering', 'freq': '1/week', 'date': 'Nov. 7'}}/>
                    <Todo data={{'name':'The Green Ball', 'task': 'Watering', 'freq': '1/week', 'date': 'Nov. 7'}}/>
                    <Todo data={{'name':'The Green Ball', 'task': 'Watering', 'freq': '1/week', 'date': 'Nov. 7'}}/>
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
    sectionContainer: {
        flex: 1,
        marginHorizontal: 16,
        marginTop: 20,
        marginBottom: 14,
    },
    sectionTitle: {
        textAlign:'left',
        fontSize: 34,
        fontWeight: 'bold',
        color: '#ef5e85',
        marginBottom: 10,
    },
    
});