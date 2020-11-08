import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

export default function PhotoTaking() {
    const [hasPermission, setHasPermission] = useState(null);
    const [image, setImage] = useState('');

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

    return (
    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'} }>
        <Camera style={{height: '100%' , width: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => {
                if (hasPermission) {
                    photo = camera.takePictureAsync();
                    console.log(photo);
                    setImage(photo);}}}
                style={{
                height: 70, 
                width: 70,
                position: 'absolute',
                bottom: 20,
                backgroundColor: '#fff',
                borderRadius: 50
            }}>
            </TouchableOpacity>
        </Camera>
        {image}
    </View>
  );
}