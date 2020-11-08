import React, { useState, useEffect } from 'react';
import { Button, View, Platform} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function chooseFromLibrary() {
    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');}}})();
  }, []);
  
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true
    });

    console.log(result);

    if (!result.cancelled) {
        setImage(result.path);
    }
  };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Choose From Library" onPress={pickImage} />
        {image}
        </View>
  );
}