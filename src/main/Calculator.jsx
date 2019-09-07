import React, { Component } from 'react';
import './Calculator.css'
import Button from '../components/Button';
import Display from '../components/Display';
import { clear } from 'sisteransi';

export default class Calculator extends Component {
    
    clearMemory(){
        console.log('limpar')
    }
    setOperation(operation){
        console.log(operation)
    }
    addDigit(digit){
        console.log(digit)
    }
    
    render() {
        const addDigit = n => this.addDigit(n)
        const clearMemory = this.clearMemory()
        const setOperation = op => this.setOperation(op)
       
        return (
            <div className="calculator">
                <Display value="100" ></Display>
                <Button label="AC" onClick={() => clearMemory()} triple></Button>
                <Button label="/" onClick={() => setOperation} operation></Button>
                <Button label="7" onClick={() => addDigit}></Button>
                <Button label="8" onClick={() => addDigit}></Button>
                <Button label="9" onClick={() => addDigit}></Button>
                <Button label="*" onClick={() => setOperation} operation></Button>
                <Button label="4" onClick={() => addDigit}></Button>
                <Button label="5" onClick={() => addDigit}></Button>
                <Button label="6" onClick={() => addDigit}></Button>
                <Button label="-" onClick={() => setOperation} operation></Button>
                <Button label="1" onClick={() => addDigit}></Button>
                <Button label="2" onClick={() => addDigit}></Button>
                <Button label="3" onClick={() => addDigit}></Button>
                <Button label="+" onClick={() => setOperation} operation></Button>
                <Button label="0" onClick={() => addDigit} double></Button>
                <Button label="." onClick={() => addDigit}></Button>
                <Button label="=" onClick={() => setOperation} operation></Button>
            </div>
        )
    }
}