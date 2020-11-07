import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

export default class SimpleCircleButton extends React.Component {
    render(){
        let localStyles = styles(this.props) //need to load styles with props because the styles rely on prop values

        return (
            <View style={localStyles.container}>
                <TouchableOpacity
                    activeOpacity={.8} //The opacity of the button when it is pressed
                    style = {localStyles.button}
                    onPress = {this.props.onPress}
                >
                    {this.props.children}
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = (props) => StyleSheet.create({
    container: {
        position: 'relative',
        zIndex: 0,
        backgroundColor: 'rgba(255,95,28,0.42)', //add a background to highlight the touchable area
    },
    button: {
        backgroundColor: 'rgba(20,174,255,0.51)',
        justifyContent: 'center',
        alignContent: 'center',
        borderWidth: 3,
        borderRadius: (props.circleDiameter / 2),
        width: props.circleDiameter,
        height: props.circleDiameter,
    },
});