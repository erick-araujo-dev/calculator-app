import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface DisplayProps{
    value: string
}
const Display:React.FC<DisplayProps> = ({value}) => {
    return (
        <View style={style.display}>
            <Text style={style.displayValue} numberOfLines={1}>{value}</Text>
        </View>
    );
};

const style = StyleSheet.create({
    display: {
        flex: 1,
        padding: 20, 
        justifyContent: "flex-end",
        alignSelf:'flex-end',
        
        
    },
    displayValue: {
        fontSize: 90,
        color: "#fff",
        fontWeight: '100',
    }
})

export default Display;