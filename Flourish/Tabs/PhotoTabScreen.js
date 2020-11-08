import React, { useState, useEffect } from 'react';
import { Button, View, Platform, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Camera} from 'expo-camera';

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
            })
        }, []);

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
            <View style={{flex: 1, width: 100, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity onPress={pickImage}>
                <Image source={require('../assets/gallery2.png')} 
                style={{
                    height: 50, 
                    width: 50,
                    position: 'absolute',
                    bottom: 30,
                    }}/>
            </TouchableOpacity>
            </View>

            // <View style={{flex:1, justifyContent:"space-between"}}>
            // <TouchableOpacity onPress={pickImage}>
            //     <View onPress={pickImage}>
            //         <Text style={{fontSize: 20, color:'#ef5e85', fontWeight: 'bold'}} >Gallery</Text>
            //     </View>
            // </TouchableOpacity>
            // </View>
        )
    }

    const TakePhoto = () => {
        const [image, setImage] = useState(null);

        <Camera ref = {ref => {this.camera = ref;}}/>;

        take = async () => {
            if (this.camera) {
                let photo = await this.camera.current.takePictureAsync({
                    base64: true,
                });
                this.props.cameraToggle(false);
                console.log(photo);
                setImage({captures: photo.uri});
        }}
        
        return (
            <View style={{flex: 1, width: 170, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity onPress={take}>
                <Image source={require('../assets/camera.png')} 
                style={{
                    height: 40, 
                    width: 40,
                    position: 'absolute',
                    bottom: 30,
                    }}/>
            </TouchableOpacity>
            </View>
        )}

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'stretch', }}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'} }>
                <Camera style={{height: '100%' , width: '100%', justifyContent: 'center', alignItems: 'center'}}></Camera>
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