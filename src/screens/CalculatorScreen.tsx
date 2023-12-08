import React, {  } from 'react';
import { View, StyleSheet } from 'react-native';
import Display from '../components/Display';
import Button from '../components/Button';

interface CalculatorScreenState{
    displayValue: "0",
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

const initialState = {
    displayValue: "0",
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export default class CalculatorScreen extends React.Component<CalculatorScreenState> {

    state = {...initialState}

    addDigit = (digit: string) =>{
        const clearDisplay = this.state.clearDisplay || this.state.displayValue === "0";
        if(digit === "," && this.state.displayValue.includes(",") && !clearDisplay){
            return
        }
        if(this.state.displayValue.length >= 9){
            return
        }

        const currentValue = clearDisplay ? "" : this.state.displayValue;
        const newDisplayValue = currentValue + digit;

        this.setState({ displayValue: newDisplayValue, clearDisplay: false }, () => {
            if (digit !== ",") {
                const newValue = parseFloat(newDisplayValue);
                const newValues = [...this.state.values];
                newValues[this.state.current] = newValue;
                this.setState({ values: newValues });
            }
        });
    }

    clearMemory = () => {
        this.setState({...initialState})
    }

    setOperation = (operation: string) => {
        
        if (this.state.current === 0) {
            this.setState({ operation, current: 1, clearDisplay: true });
        } else {
            const equals = operation === "=";
            const values = [...this.state.values];
    
            try {
                let result: number 
                const value1 = values[0].toString().replace(',', '.');
                const value2 = values[1].toString().replace(',', '.');
                if(operation === "%"){
                     result = (values[0]/100)
                     values[0] = result
                }else {
                    console.warn(parseFloat(value1))
                    console.warn(parseFloat(value2))
                    result = eval(`${parseFloat(value1)} ${this.state.operation} ${parseFloat(value2)}`);
                    values[0] = result;
                    console.warn(`${values[0]} ${this.state.operation} ${values[1]}`);
                }
                } catch (error) {
                values[0] = this.state.values[0];
            }
    
            values[1] = 0;
            this.setState({
                displayValue: values[0].toString(),
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: true,
                values: values,
            });
        }     
    };
    render() {
        return (
            <>
                <Display value={this.state.displayValue} />
                <View style={style.containeButtons}>
                    <Button onClick={this.clearMemory} label='AC' color='#000' backgroundColor='#d3d3d3' />
                    <Button onClick={() => true} label='+/-' color='#000' backgroundColor='#d3d3d3' />
                    <Button onClick={() => this.setOperation("%")} label='%' color='#000' backgroundColor='#d3d3d3' />
                    <Button onClick={() => this.setOperation("/")} label='÷' backgroundColor='#ffa500' />

                    <Button onClick={() => this.addDigit("7")} label='7' />
                    <Button onClick={() => this.addDigit("8")} label='8' />
                    <Button onClick={() => this.addDigit("9")} label='9' />
                    <Button onClick={() => this.setOperation("*")} label='×' backgroundColor='#ffa500' />

                    <Button onClick={() => this.addDigit("4")} label='4' />
                    <Button onClick={() => this.addDigit("5")} label='5' />
                    <Button onClick={() => this.addDigit("6")} label='6' />
                    <Button onClick={() => this.setOperation("-")} label='-' backgroundColor='#ffa500' />

                    <Button onClick={() => this.addDigit("1")} label='1' />
                    <Button onClick={() => this.addDigit("2")} label='2' />
                    <Button onClick={() => this.addDigit("3")} label='3' />
                    <Button onClick={() => this.setOperation("+")} label='+' backgroundColor='#ffa500' />

                    <Button onClick={() => this.addDigit("0")} label='0' buttonDouble={true} />
                    <Button onClick={() => this.addDigit(",")} label=',' />
                    <Button onClick={() => this.setOperation("=")} label='=' backgroundColor='#ffa500' />

                </View>

            </>
        );
    };
}
const style = StyleSheet.create({
    containeButtons: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 50
    }
})

