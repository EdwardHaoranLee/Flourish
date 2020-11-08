import React, { useState, useEffect } from 'react';
import { Button, View, Platform, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Camera} from 'expo-camera';
const plantID = require("../Gateways/PlantIdentification")


export default function PhotoTabScreen() {

    const [hasPermission, setHasPermission] = useState(null);
    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;}

    if (hasPermission === false) {
        return <Text>No access to camera</Text>;}
    
    const Library = () => {
        useEffect(() => {
            (async () => {
                if (Platform.OS !== 'web') {
                    const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
                }
            })()
        }, []);

        const pickImage = async () => {
            let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true
        });
        if (!result.cancelled) {
            setImage(result.path);
            plantID(result.uri)
        }};

        return (
            <View style={{flex: 1, width: 100, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity onPress={pickImage}>
                <Image source={require('../assets/gallery2.png')} 
                style={{
                    height: 70,
                    width: 70,
                    position: 'absolute',
                    bottom: 20,
                    }}/>
            </TouchableOpacity>
            </View>
        )
    }

    const TakePhoto = () => {

        const take = async () => {
            const result = await ImagePicker.launchCameraAsync({
                allowEditing: true,
                exif: true
            });

            if (!result.cancelled) {
                this.setState({ image: result.uri });
            }
            plantID(result.uri)
        }
        
        return (
            <View style={{flex: 1, width: 170, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity onPress={take}>
                <Image source={require('../assets/camera.png')} 
                style={{
                    position: 'absolute',
                    bottom: 20, // space from bottombar
                    height: 70,
                    width: 70,
                    }}/>
            </TouchableOpacity>
            </View>
        )}

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'stretch', }}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'} }>
                <Camera style={{height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center'}}/>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style = {{flex:3}}>
                    <Library />
                    </View>
                    <View style = {{flex:3}}>
                    <TakePhoto />
                    </View>
                </View>
            </View>
        </View>);
}
