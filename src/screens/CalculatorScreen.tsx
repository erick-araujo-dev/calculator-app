import React, {useState} from 'react';
import {Text, View, StyleSheet } from 'react-native';
import Display from '../components/Display';
import Button from '../components/Button';

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0,
  };
//   let newNumber = true
// let operator
// let firstNum
// let currentNumber

// const pendingOperation = () => operator != undefined
const CalculatorScreen = () => {
    const [newDigit, setNewDigit] = useState(true)
    const [clearDisplay, setClearDisplay] = useState(false)
    const [operator, setOperator] = useState("")
    const [currentValue, setCurrentValue] = useState("")
    const [firstValue, setFirstValue] = useState("")
    const [displayValue, setDisplayValue] = useState("")

    const pendingOperation = () => operator != "";
    
    // const updateDisplay = (digit: string) => {
    //     if (currentValue === "0") {
    //         if (digit !== ",") {
    //             clearMemory();
    //         }
    //         setCurrentValue((prevValue) => (digit !== "," && !prevValue.includes(",")) ? digit : prevValue + digit);
    //         setNewDigit(false);
    //     } else {
    //         setCurrentValue((prevValue) => prevValue + digit);
    //     }
    
    //     console.log(currentValue);
    // };

    const updateDisplay = (text: string) => {
        if (newDigit) {
            setDisplayValue(text);
            setNewDigit(false);
        } else {
            setDisplayValue(displayValue + text);
        }
    }
    
    const insertNumber = (digit: string) => updateDisplay(digit);

    const clearMemory = () => {
        setDisplayValue("0")
        setFirstValue("")
        setCurrentValue("")
    }

    const calculate = () => {
        if (pendingOperation()) {
            setCurrentValue(displayValue)
            setNewDigit(true)
            let operation: number;
            if (operator == '+') {
                operation = Number(firstValue) + Number(currentValue)
                updateDisplay(operation.toString())
            }else if (operator == '*') {
                operation = Number(firstValue) * Number(currentValue)
                updateDisplay(operation.toString())
            }else if (operator == '-') {
                operation = Number(firstValue) - Number(currentValue)
                updateDisplay(operation.toString())
            }else if (operator == '/') {
                operation = Number(firstValue) / Number(currentValue)
                updateDisplay(operation.toString())
            } else if (operator == '=') {
                updateDisplay("0");
            } else if (operator == '%') {
                operation = (Number(firstValue)/100) * Number(currentValue)
                updateDisplay(operation.toString())
            }
        }
    }

    const setOperation = (operation: string) => {
        if (!newDigit)
        calculate()
        setNewDigit(true)
        setOperator(operation)
        setFirstValue(displayValue);
    }
    return (
        <>
            <Display value={displayValue}/>
            <View style={style.containeButtons}>
                <Button onClick={clearMemory} label='AC' color='#000' backgroundColor='#d3d3d3'/>
                <Button onClick={() => true} label='+/-' color='#000'backgroundColor='#d3d3d3'/>
                <Button onClick={() => setOperation("%")} label='%' color='#000' backgroundColor='#d3d3d3'/>
                <Button onClick={() => setOperation("/")} label='÷' backgroundColor='#ffa500'/>

                <Button onClick={() => insertNumber("7")} label='7'/>
                <Button onClick={() => updateDisplay("8")} label='8'/>
                <Button onClick={() => updateDisplay("9")} label='9'/>
                <Button onClick={() => setOperation("*")} label='×' backgroundColor='#ffa500'/>

                <Button onClick={() => updateDisplay("4")} label='4'/>
                <Button onClick={() => updateDisplay("5")} label='5'/>
                <Button onClick={() => updateDisplay("6")} label='6'/>
                <Button onClick={() => setOperation("-")} label='-' backgroundColor='#ffa500'/>

                <Button onClick={() => updateDisplay("1")} label='1'/>
                <Button onClick={() => updateDisplay("2")} label='2'/>
                <Button onClick={() => updateDisplay("3")} label='3'/>
                <Button onClick={() => setOperation("+")} label='+' backgroundColor='#ffa500'/>

                <Button onClick={() => updateDisplay("0")} label='0' buttonDouble={true}/>
                <Button onClick={() => updateDisplay(",")} label=','/>
                <Button onClick={() => setOperation("=")} label='=' backgroundColor='#ffa500'/>

            </View>

        </>
    );
};
const style = StyleSheet.create({
    containeButtons: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 50
    }
})

export default CalculatorScreen;