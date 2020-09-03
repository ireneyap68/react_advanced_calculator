import React, { useState } from 'react';
import result from './result'

const Calculator = props => {
    // Declare state variables
    const [value, setValue]= useState("0");
    const [memory, setMemory]= useState(null);
    const [operator,setOperator]= useState(null);
    const [clear,setClear]= useState(true);

    const handleButtonPress = (type, content) => {
      const num = parseFloat(value);
      console.log(type, content)
      if(type === "op") {
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
            setClear(true);
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
            setClear(true);
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
            setClear(true);
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
            setClear(true);
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
            setClear(true);
            return;
        }

        if (value[value.length - 1] === ".") {
            setValue(value + content);
          } else {
            setValue(parseFloat(num + content).toString());
          }
    } else if (type === "num"){
      if (clear){
        setValue(content);
        setClear(false);
      } else {
        if(value === "0"){
          setValue(content);
        }else{
          setValue(value+content);
        }
      }
    }

  };


    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>{result(value)}</p>
                
                <div className="calc-row">
                    <button className="calc-button calc-button-top" content="AC" onClick={()=>{handleButtonPress("op","AC")}} type="function">AC</button>
                    <button className="calc-button calc-button-top" content="+/-" onClick={()=>{handleButtonPress("op","+/-")}} type="function">+/-</button>
                    <button className="calc-button calc-button-top" content="%" onClick={()=>{handleButtonPress("op","%")}} type="function">%</button>
                    <button className="calc-button calc-button-op" content="÷" onClick={()=>{handleButtonPress("op","÷")}} type="operator">÷</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" content="7" onClick={()=>{handleButtonPress("num", "7")}}>7</button>
                    <button className="calc-button" content="8" onClick={()=>{handleButtonPress("num", "8")}}>8</button>
                    <button className="calc-button" content="9" onClick={()=>{handleButtonPress("num", "9")}}>9</button>
                    <button className="calc-button calc-button-op" content="×" onClick={()=>{handleButtonPress("op","×")}} type="operator">×</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" content="4" onClick={()=>{handleButtonPress("num", "4")}}>4</button>
                    <button className="calc-button" content="5" onClick={()=>{handleButtonPress("num", "5")}}>5</button>
                    <button className="calc-button" content="6" onClick={()=>{handleButtonPress("num", "6")}}>6</button>
                    <button className="calc-button calc-button-op" content="−" onClick={()=>{handleButtonPress("op","−")}} type="operator">−</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" content="1" onClick={()=>{handleButtonPress("num", "1")}}>1</button>
                    <button className="calc-button" content="2" onClick={()=>{handleButtonPress("num", "2")}}>2</button>
                    <button className="calc-button" content="3"onClick={()=>{handleButtonPress("num", "3")}}>3</button>
                    <button className="calc-button calc-button-op" content="+" onClick={()=>{handleButtonPress("op","+")}} type="operator">+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" content="0" onClick={()=>{handleButtonPress("num", "0")}}>0</button>
                    <button className="calc-button" content="." onClick={()=>{handleButtonPress("op",".")}}>.</button>
                    <button className="calc-button calc-button-op" content="=" onClick={()=>{handleButtonPress("op","=")}} type="operator">=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator