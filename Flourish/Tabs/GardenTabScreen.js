import React, { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity, Modal, Image, SectionList } from 'react-native';
import { TouchableHighlight } from "react-native-gesture-handler";
// import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import PlantCard from '../Components/Garden/PlantCard'


class PlantCard extends React.Component {
    render() {
        return (
            <View
                style={{
                    flex: 0.8,
                    height: 150,
                    // width: '100%',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    marginBottom: 8,
                    marginHorizontal: 10,

                    backgroundColor: '#fff',
                    borderRadius: 10,

                    // shadowColor: "#000",
                    // shadowOffset: {
                    //     width: 0,
                    //     height: 4,
                    // },
                    // shadowOpacity: 0.32,
                    // shadowRadius: 5.46,

                    // elevation: 9,
                }}>
                <View style={{
                    flex: 1,
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                    padding: 8,
                }}>
                    <Image
                        style={{
                            flex: 1,
                            borderRadius: 10,
                        }}
                        source={{ uri: this.props.data.img }}
                    />
                </View>
                <View style={{
                    flexDirection: 'column',
                    padding: 8,
                    flex: 1,
                }}>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                    }}>
                        {this.props.data.name}
                    </Text>
                    <Text style={{
                        fontSize: 12,
                    }}>
                        {this.props.data.binomial}
                    </Text>
                </View>
            </View>
        );
    }
}

export default function GardenTabScreen() {
    const [modalVisible, setModalVisible] = useState(false);
    const [currPlant, setCurrPlant] = useState(DATA[0]);

    const renderItem = ({ item }) => {
        // if (item.id < DATA.length - 1) {
        // console.log(item)
        return (
            <TouchableOpacity
                onPress={() => {
                    console.log(1);
                    setCurrPlant({
                        "id": item.id,
                        "img": item.img,
                        "name": item.name,
                        "binomial": item.binomial,
                        "intro": item.intro,
                        "maintain": item.maintain,
                        "reminder": item.reminder,
                    })
                    setModalVisible(true);
                }}>
                <PlantCard
                    data={{
                        "id": item.id,
                        "img": item.img,
                        "name": item.name,
                        "binomial": item.binomial,
                    }}


                />
            </TouchableOpacity>
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
            <Text style={styles.sectionTitle}>My Garden</Text>
            <FlatList style={styles.cardContainer}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
            >
                <View style={modalStyles.centeredView}>
                    <ScrollView style={modalStyles.modalView}>
                        <TouchableOpacity
                            style={{ width: 50, height: 50, position: 'absolute', top: 14, left: -14, zIndex: 10 }}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <MaterialCommunityIcons name="chevron-left" color="#CACACA" size={40} />
                        </TouchableOpacity>
                        <View style={{ ...modalStyles.rowContainer, marginTop: 32 }}>
                            <View style={{ ...modalStyles.plantImage, marginBottom: 16, }}>
                                <Image
                                    style={modalStyles.plantImage}
                                    source={{ uri: currPlant.img }}
                                />
                            </View>
                            <Text style={modalStyles.plantName}>{currPlant.name}</Text>
                            <Text style={modalStyles.plantBinomial}>{currPlant.binomial}</Text>
                        </View>
                        <View style={modalStyles.rowContainer}>
                            <Text style={modalStyles.plantIntro}>
                                {currPlant.intro}
                            </Text>
                        </View>
                        <View style={modalStyles.rowContainer}>
                            <View style={{ ...modalStyles.mrContainer, backgroundColor: '#ffffff' }}>
                                <Text style={{ ...modalStyles.mrContainerHeader, color: '#505050' }}>MAINTAIN</Text>
                                {
                                    console.log(currPlant.maintain)
                                }
                                {currPlant.maintain.map(i => (
                                    <View key={i.key} style={modalStyles.mrItem}>
                                        <Text style={modalStyles.mrItemText}>{i.title}</Text>
                                        <Text style={modalStyles.mrItemText}>{i.spec}</Text>
                                    </View>
                                ))}

                            </View>
                        </View>
                        <View style={{ ...modalStyles.rowContainer, marginBottom: 32 }}>
                            <View style={{ ...modalStyles.mrContainer, backgroundColor: '#EF5E85' }}>
                                <View style={{
                                    width: '100%',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between'
                                }}>
                                    <Text style={{ ...modalStyles.mrContainerHeader, color: '#ffffff' }}>REMINDER</Text>
                                    <TouchableOpacity style={{borderWidth: 2, borderColor:'#ffffff', marginBottom: 7, borderRadius:20,}}>
                                        {/* <Text style={{ ...modalStyles.mrContainerHeader, color: '#ffffff', textDecorationLine: 'none' }}>+</Text> */}
                                        <MaterialCommunityIcons name="plus" color="#ffffff" size={20} />
                                    </TouchableOpacity>

                                </View>

                                {currPlant.reminder.map(i => (
                                    <TouchableOpacity key={i.key} style={{ ...modalStyles.mrItem, backgroundColor: '#ffffff' }}>
                                        <Text style={modalStyles.mrItemText}>{i.task}</Text>
                                        <Text style={modalStyles.mrItemText}>{i.date}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>

                    </ScrollView>
                </View>
            </Modal>
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
const modalStyles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#00000020',
        // marginTop: 22
    },
    modalView: {
        flex: 1,
        width: '90%',
        marginTop: 16,
        marginBottom: 32,
        backgroundColor: "#f0f0f0",
        borderRadius: 10,
        paddingHorizontal: 32,
        // paddingVertical: 32,
        // alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    rowContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        // marginVertical: 20,
    },
    plantImage: {
        width: 150,
        height: 200,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    plantName: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#505050'
    },
    plantBinomial: {
        fontSize: 13,
        color: '#505050',
        fontStyle: 'italic',
    },
    plantIntro: {
        marginVertical: 16,
        marginHorizontal: 0,
        textAlign: 'left',
        color: '#505050',
    },
    mrContainer: {
        width: '100%',
        marginVertical: 8,
        padding: 16,
        // backgroundColor: '#ffffff',
        borderRadius: 10,
    },
    mrContainerHeader: {
        textAlign: 'left',
        fontSize: 20,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        marginBottom: 5,
    },
    mrItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 3,
        marginHorizontal: -5,
        padding: 5,
        // backgroundColor: '#f0f0f0',
        borderRadius: 5,
    },
    mrItemText: {
        color: '#505050',
        fontSize: 13,
    }
})


const DATA = [
    {
        "id": "0",
        "img": "https://i1.kknews.cc/SIG=52b418/26r5000002r82qro63ro.jpg",
        "name": "My Red Plant",
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
                "name": "The Green Ball",
                "task": "WATERING",
                "freq": "weekly",
                "date": "Nov. 8",
            },
            {
                "key": 1,
                "name": "The Green Ball",
                "task": "FERTILIZING",
                "date": "Nov. 8",
                "freq": "weekly",
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
                "name": "The Green Ball",
                "task": "WATERING",
                "freq": "weekly",
                "date": "Nov. 8",
            },
            {
                "key": 1,
                "name": "The Green Ball",
                "task": "FERTILIZING",
                "date": "Nov. 8",
                "freq": "weekly",
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
                "name": "The Green Ball",
                "task": "WATERING",
                "freq": "weekly",
                "date": "Nov. 8",
            },
            {
                "key": 1,
                "name": "The Green Ball",
                "task": "FERTILIZING",
                "date": "Nov. 8",
                "freq": "weekly",
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
                "name": "The Green Ball",
                "task": "WATERING",
                "freq": "weekly",
                "date": "Nov. 8",
            },
            {
                "key": 1,
                "name": "The Green Ball",
                "task": "FERTILIZING",
                "date": "Nov. 8",
                "freq": "weekly",
            },
        ],
    },
    {
        "id": "4",
        "img": "https://i.zw3e.com/zw_news_map/550/2017121/1512527973023359675.jpg",
        "name": "Leaves",
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
                "name": "The Green Ball",
                "task": "WATERING",
                "freq": "weekly",
                "date": "Nov. 8",
            },
            {
                "key": 1,
                "name": "The Green Ball",
                "task": "FERTILIZING",
                "date": "Nov. 8",
                "freq": "weekly",
            },
        ],
    },
]

