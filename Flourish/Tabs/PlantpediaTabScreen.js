import React from 'react';
import dismissKeyboard, { Button, Text, View, Image, TouchableOpacity} from 'react-native';
import { WebView } from "react-native-webview";
import { SearchBar } from 'react-native-elements';

export default class PlantpediaTabScreen extends React.Component  {

    state = {
        search: '',
        searched: false,
    };

    componentWillUnmount() {
        this.setState({
            searched: false
        })
    }

    updateSearch = (search) => {
        this.setState({
            search: search

        });
        if (this.state.searched){
            this.setState({
                searched: false
            })
        }
    };

    searchWiki = () => {
        this.setState({
            searched: true
        })
    }

    render() {
        const {search, searched} = this.state
        return (
            <View style={{flex: 1}}>
                <View style={{
                    height: 43,
                    backgroundColor: "#ef5e85"
                }}/>
                <View style={{
                    flexDirection: "row",
                    alignItems: 'center',
                }}>
                    <View style={{width:350, height: 50, backgroundColor:"white", borderWidth:2.5, 
                            borderColor: '#ef5e85', borderRadius: 50, top: 1, left: 3}}>
                        <SearchBar
                            placeholder="Search for plant here..."
                            onChangeText={this.updateSearch}
                            value={search}
                            lightTheme={true}
                            containerStyle={{
                                backgroundColor: "white",
                                borderRadius: 50,
                                height: 6,
                                width: 290,
                                left: 10
                            }}
                            inputContainerStyle={{
                                backgroundColor: "white"
                            }}
                            returnKeyLabel={"Search"}
                            returnKeyType={"search"}
                            onSubmitEditing={this.searchWiki}
                        />
                    </View>
                    <TouchableOpacity onPress={this.searchWiki}>
                        <Image source={require('../assets/search4.jpg')} 
                        style={{
                        top: 5,
                        height: 40, 
                        width: 40,
                        left: 10,
                        bottom: 0}}/>
                    </TouchableOpacity>
                </View>


                {searched && <WebView source={{ uri: `https://en.wikipedia.org/wiki/${search}` }} />}
            </View>


        )
    }



    // const state = {
    //
    // }
    // return (
    // const search  = this.state;
    //     // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //     //     <Text>Flourish!</Text>
    //     // </View>
    //
    //
    // return (
    //     <SearchBar
    //         placeholder="Type Here..."
    //         onChangeText={this.updateSearch}
    //         value={search}
    //     />
    // );
    //
    // );
    // {/*<View style={{*/}
    // {/*    height: 50,*/}
    // {/*}}>*/}
    //
    // {/*</View>*/}
    // {/*<SearchBar*/}
    // {/*    placeholder="Type Here..."*/}
    // {/*    onChangeText={this.updateSearch}*/}
    // {/*    value={search}*/}
    // {/*    lightTheme={true}*/}
    // {/*    containerStyle={{*/}
    // {/*        backgroundColor: "#f0f0f0"*/}
    // {/*    }}*/}
    // {/*    inputContainerStyle={{*/}
    // {/*        backgroundColor:"#f0f0f0"*/}
    // {/*    }}*/}
    //
    // {/*/>*/}
}