import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { addMask } from '../helpers/maskNumber';


interface DisplayProps{
    value: string
}
const Display:React.FC<DisplayProps> = ({value}) => {
    let fontSize = 90;

    if (value.length === 8) {
        fontSize -= 10;
    } else if (value.length === 9) {
        fontSize -= 20;
    } else if (value.length === 10) {
        fontSize -= 30;
    } else if (value.length === 11) {
        fontSize -= 40;
    }
    const style = StyleSheet.create({
        display: {
            flex: 1,
            padding: 20, 
            justifyContent: "flex-end",
            alignSelf:'flex-end',
            
            
        },
        displayValue: {
            fontSize: fontSize,
            color: "#fff",
            fontWeight: '100',
        }
    })

    const maskedValue = addMask(value);

    return (
        <View style={style.display}>
            <Text style={style.displayValue} numberOfLines={1}>{maskedValue}</Text>
        </View>
    );
};



export default Display;