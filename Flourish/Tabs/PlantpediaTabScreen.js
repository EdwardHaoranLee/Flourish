import React from 'react';
import dismissKeyboard, { Button, Text, View } from 'react-native';
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
                    height: 50,
                }}/>
                <View style={{
                    flexDirection: "row",
                    alignItems: 'center',
                }}>
                    <View style={{width:"80%"}}>
                        <SearchBar
                            placeholder="Type Here..."
                            onChangeText={this.updateSearch}
                            value={search}
                            lightTheme={true}
                            containerStyle={{
                                backgroundColor: "#f0f0f0"
                            }}
                            inputContainerStyle={{
                                backgroundColor: "#cacaca"
                            }}
                            returnKeyLabel={"Search"}
                            returnKeyType={"search"}
                            onSubmitEditing={this.searchWiki}

                        />
                    </View>

                    <Button
                        onPress={this.searchWiki}
                        title="Search"
                    />
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