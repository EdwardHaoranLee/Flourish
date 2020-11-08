import React, {useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, Button} from 'react-native';
import ImagePicker from "react-native-image-crop-picker";
import {Camera} from 'expo-camera'


export default class PhotoTabScreen extends React.Component{

    state = {
        image: null
    };

    selectPicture = async () => {

        const [hasPermission, setHasPermission] = useState(null);

        useEffect(() => {
            (async () => {
                const { status } = await Camera.requestPermissionsAsync();
                setHasPermission(status === 'granted');
            })();
        }, []);
    
        if (hasPermission === null) {
            return <View />;
        }
    
        if (hasPermission === false) {
            return <Text>No access to camera</Text>;
        }

        await Permissions.askAsync(Permissions.Camera_ROLL);
        const {cancelled, uri} = await ImagePicker.launchImageLibraryAsync({
            aspect: 1,
            allowsEditing: true
        })
        if (!cancelled) this.setState({image:uri})
    };

    takePicture = async () => {
        const [hasPermission, setHasPermission] = useState(null);

        useEffect(() => {
            (async () => {
                const { status } = await Camera.requestPermissionsAsync();
                setHasPermission(status === 'granted');
            })();
        }, []);
    
        if (hasPermission === null) {
            return <View />;
        }
    
        if (hasPermission === false) {
            return <Text>No access to camera</Text>;
        }
    
        let result = await Permissions.askAsync(Permissions.CAMERA);
        const {cancelled, uri} = await ImagePicker.launchCameraAsync({
            allowsEditing: false
        });
        this.setState({image:uri});
    }

    render() {
        return(
            <View style = {styles.container}>
            <TouchableOpacity
                onPress={this.selectPicture}>
                <Text>Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={this.takePicture}>
                <Text>Camera</Text>
            </TouchableOpacity>
            </View>
        )
    }
}
    
const styles = StyleSheet.create({
    container: {
        bottom: 10,
        padding: 10,
        flex: 1,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    }
});
