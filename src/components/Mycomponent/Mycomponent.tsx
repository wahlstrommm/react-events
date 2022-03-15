import { useState } from 'react';
import './Mycomponent.css';
export function Mycomponent(){
    
    const [firstNumber, setFirstNumber] = useState(0)
    const [secondNumber, setSecondNumber] = useState(0)
    const [result, setResult] = useState(0)
    const functionA =(e:any)=> {
        setFirstNumber(parseInt(e.target.value));
        console.log(firstNumber)
    }
    const functionB = (e:any)=>{
        setSecondNumber(parseInt(e.target.value));
        console.log(secondNumber)
    }
    const calsum = ()=>{
        setResult(firstNumber+ secondNumber);
    }
    const clear=()=>{
        setSecondNumber(0)
        setFirstNumber(0)
        setResult(0)
    }
    return <div className='root'>
                <div className='container'>    
                    
                <input type="number" onChange={functionA} value={firstNumber} min={0}/>
                <input type="number" onChange={functionB} value={secondNumber} min={0}/>

                <button onClick={calsum}>Räkna ut!</button>
                <br></br>
               <h3>
                   Första nummer: {firstNumber}
                </h3> 
                <br></br>
                <h3>
                Andra nummer: {secondNumber}
                </h3>
                <br />
                <h3>
                Resultat: {result}
                </h3>
                <button onClick={clear}>Börja om!</button>
                </div>
            </div>
}