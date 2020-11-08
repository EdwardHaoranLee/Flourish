import React, { useState, useEffect } from 'react';
import { Button, View, Platform, StyleSheet} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function PhotoTabScreen() {
    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');}}})();}, []);
  
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true
    });

    console.log(result);

    if (!result.cancelled) {
        setImage(result.path);
    }};

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', color:  "#ef5e85"}}>
            <Button title="Choose From Library" onPress={pickImage} />
        {image}
        </View>);
}

    // return (
    //     <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'} }>
    //         <Camera style={{height: '100%' , width: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
    //             <TouchableOpacity onPress={taking}
    //                 style={{
    //                 height: 70, 
    //                 width: 70,
    //                 position: 'absolute',
    //                 bottom: 50,
    //                 backgroundColor: '#fff',
    //                 borderRadius: 50
    //             }}>
    //             </TouchableOpacity>
    //         </Camera>
    //     </View>
    //   );
    // }

//     const PhotoTaking = () => {
//         const [hasPermission, setHasPermission] = useState(null);
//         const [image, setImage] = useState('');
    
//         useEffect(() => {
//             (async () => {
//                 const { status } = await Camera.requestPermissionsAsync();
//                 setHasPermission(status === 'granted');
//             })();
//         }, []);
    
//         if (hasPermission === null) {
//             return <View />;
//         }
    
//         if (hasPermission === false) {
//             return <Text>No access to camera</Text>;
//         }
    
//         return (
//         <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'} }>
//             <Camera style={{height: '100%' , width: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
//                 <TouchableOpacity onPress={() => {
//                     if (hasPermission) {
//                         photo = camera.takePictureAsync();
//                         console.log(photo);
//                         setImage(photo);}}}
//                     style={{
//                     height: 70, 
//                     width: 70,
//                     position: 'absolute',
//                     bottom: 20,
//                     backgroundColor: '#fff',
//                     borderRadius: 50
//                 }}>
//                 </TouchableOpacity>
//             </Camera>
//             {image}
//         </View>
//       );
//     }

//     const chooseFromLibrary = () => {
//         const [image, setImage] = useState(null);
    
//         useEffect(() => {
//             (async () => {
//                 if (Platform.OS !== 'web') {
//                     const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
//                     if (status !== 'granted') {
//                         alert('Sorry, we need camera roll permissions to make this work!');}}})();
//       }, []);
      
//         const pickImage = async () => {
//             let result = await ImagePicker.launchImageLibraryAsync({
//             mediaTypes: ImagePicker.MediaTypeOptions.Images,
//             allowsEditing: true
//         });
    
//         console.log(result);
    
//         if (!result.cancelled) {
//             setImage(result.path);
//         }
//       };
    
//         return (
//             <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             {image}
//             </View>
//       );
//     }

//     return (
//         <View style={styles.container}>
//             <TouchableOpacity
//             onPress={chooseFromLibrary}>
//                 <Text> Photo from library</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//             onPress={PhotoTaking}>
//                 <Text> Taking Photo</Text>
//             </TouchableOpacity>
//         </View>
//     )
// }

const styles = StyleSheet.create({
    container: {
        bottom: 0,
        padding: 10,
        flex: 1,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    }
});