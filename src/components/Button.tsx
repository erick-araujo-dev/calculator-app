import React from 'react';
import { Text, TouchableHighlight, StyleSheet, Dimensions } from 'react-native';

interface ButtonProps{
    onClick: () => void,
    label: string,
    color?: string,
    backgroundColor?: string,
    buttonDouble?: boolean
}
const Button:React.FC<ButtonProps> = ({onClick, label, color = "#fff", backgroundColor = "#333333", buttonDouble}) => {
    const style = StyleSheet.create({
        textButton: {
            fontSize: 30,
            fontWeight: '600',
            textAlign: "center",
            color: color
        },
        button: {
            width: Dimensions.get("window").width / 4.5,
            height: Dimensions.get("window").width / 4.5,
            padding: 20 ,
            backgroundColor: backgroundColor,
            borderWidth: 1,
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
            margin: 3.5,
        },
        buttonDouble: {
            paddingLeft: 40,
            alignItems: "flex-start",
            width: Dimensions.get("window").width / 2.25,

        }
    })
    
    return (
        
        <TouchableHighlight onPress={onClick} style={[style.button, (buttonDouble ? style.buttonDouble : null)]}>
            <Text style={style.textButton}>{label}</Text>
        </TouchableHighlight>
    );
};



export default Button;