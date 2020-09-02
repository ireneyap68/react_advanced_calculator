import React, { useState } from 'react';
import Button from './Button';
import result from './result'

const Calculator = props => {
    // Declare state variables
    const [value, setValue]= useState("0");
    const [memory, setMemory]= useState(null);
    const [operator,setOperator]= useState(null);

    const handleButtonPress = content => () => {
        const num = parseFloat(value);


        if (content === "AC"){
            setValue("0");
            setMemory(null);
            setOperator(null);
            return
        }

        if (content === "+/-"){
            setValue((num * -1).toString());
            return
        }

        if (content === "%"){
            setValue((num/100).toString());
            setMemory(null);
            setOperator(null);
        }

        if (content === "."){
            if(value.includes("."))
            return
            setValue(value + ".")
            return
        }

        if (content === "+") {
            if (operator !== null) {
              if (operator === "+") {
                setMemory(memory + parseFloat(value));
              } else if (operator === "−") {
                setMemory(memory - parseFloat(value));
              } else if (operator === "×") {
                setMemory(memory * parseFloat(value));
              } else if (operator === "÷") {
                setMemory(memory / parseFloat(value));
              }
            } else {
              setMemory(parseFloat(value));
            }
            setValue("0");
            setOperator("+");
            return;
        }

        if (content === "−") {
            if (operator !== null) {
              if (operator === "+") {
                setMemory(memory + parseFloat(value));
              } else if (operator === "−") {
                setMemory(memory - parseFloat(value));
              } else if (operator === "×") {
                setMemory(memory * parseFloat(value));
              } else if (operator === "÷") {
                setMemory(memory / parseFloat(value));
              }
            } else {
              setMemory(parseFloat(value));
            }
            setValue("0");
            setOperator("−");
            return;
        }

        if (content === "×") {
            if (operator !== null) {
              if (operator === "+") {
                setMemory(memory + parseFloat(value));
              } else if (operator === "−") {
                setMemory(memory - parseFloat(value));
              } else if (operator === "×") {
                setMemory(memory * parseFloat(value));
              } else if (operator === "÷") {
                setMemory(memory / parseFloat(value));
              }
            } else {
              setMemory(parseFloat(value));
            }
            setValue("0");
            setOperator("×");
            return;
        }

        if (content === "÷") {
            if (operator !== null) {
              if (operator === "+") {
                setMemory(memory + parseFloat(value));
              } else if (operator === "−") {
                setMemory(memory - parseFloat(value));
              } else if (operator === "×") {
                setMemory(memory * parseFloat(value));
              } else if (operator === "÷") {
                setMemory(memory / parseFloat(value));
              }
            } else {
              setMemory(parseFloat(value));
            }
            setValue("0");
            setOperator("÷");
            return;
        }

        if (content === "=") {
            if (!operator) return;
      
            if (operator === "+") {
              setValue((memory + parseFloat(value)).toString());
            } else if (operator === "−") {
              setValue((memory - parseFloat(value)).toString());
            } else if (operator === "×") {
              setValue((memory * parseFloat(value)).toString());
            } else if (operator === "÷") {
              setValue((memory / parseFloat(value)).toString());
            }
            setMemory(null);
            setOperator(null);
            return;
        }

        if (value[value.length - 1] === ".") {
            setValue(value + content);
          } else {
            setValue(parseFloat(num + content).toString());
            }

    };


    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>{result(value)}</p>
                <div className="answer-box">TBD</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" content="AC" onClick={()=>{handleButtonPress("AC")}} type="function">AC</button>
                    <button className="calc-button calc-button-top" content="+/-" onClick={()=>{handleButtonPress("+/-")}} type="function">+/-</button>
                    <button className="calc-button calc-button-top" content="%" onClick={()=>{handleButtonPress("%")}} type="function">%</button>
                    <button className="calc-button calc-button-op" content="/" onClick={()=>{handleButtonPress("/")}} type="operator">/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" content="7">7</button>
                    <button className="calc-button" content="8">8</button>
                    <button className="calc-button" content="9">9</button>
                    <button className="calc-button calc-button-op" content="x" onClick={()=>{handleButtonPress("x")}} type="operator">x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" content="4">4</button>
                    <button className="calc-button" content="5">5</button>
                    <button className="calc-button" content="6">6</button>
                    <button className="calc-button calc-button-op" content="-" onClick={()=>{handleButtonPress("-")}} type="operator">-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" content="1">1</button>
                    <button className="calc-button" content="2">2</button>
                    <button className="calc-button" content="3">3</button>
                    <button className="calc-button calc-button-op" content="+" onClick={()=>{handleButtonPress("+")}} type="operator">+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" content="0">0</button>
                    <button className="calc-button" content=".">.</button>
                    <button className="calc-button calc-button-op" content="=" onClick={()=>{handleButtonPress("=")}} type="operator">=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator