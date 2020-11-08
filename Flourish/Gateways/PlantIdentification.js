import React from "react";
import fileUrl from "file-url";

class PlantIdentification extends React.Component {
    sendIdentification = (imageFilePath) => {
        const files = [fileUrl(imageFilePath)];
        const promises = files.map((file) => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = (event) => {
                    const res = event.target.result;
                    console.log(res);
                    resolve(res);
                }
                reader.readAsDataURL(file)
            })
        })

        Promise.all(promises).then((base64files) => {
            console.log(base64files)

            const data = {
                api_key: "ftgMU1minamhEWUAjMdlh2VVWMTYPGSkT5BioLhADeQNkqDBrN",
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
                    return(data)
                })
                .catch((error) => {
                    console.error('Error:', error);
                    return(error)
                });
        })

    };
}