import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import RNImgToBase64 from "react-native-image-base64";

module.exports = function sendIdentification(FilePath){
    let base64files
    RNImgToBase64.getBase64ForTag(FilePath, base64 => {base64files = base64}, err => console.log(err))


        console.log(base64files)

        const data = {
            api_key: "-- ask for one: https://web.plant.id/api-access-request/ --",
            images: base64files,
            modifiers: ["crops_fast", "similar_images"],
            plant_language: "en",
            plant_details: ["common_names",
                "url",
                "name_authority",
                "wiki_description",
                "taxonomy",
                "synonyms"]
        };

        fetch('https://api.plant.id/v2/identify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });


};