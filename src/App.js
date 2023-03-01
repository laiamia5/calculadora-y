import './App.css';
import {useState} from 'react'
// import { resultado } from './operation/counts'

function App() {

  const [input, setInput] = useState('')
  const [final, setFinal] = useState('')

  const handleInput = (val) => {
    setInput((inp) => inp + val)
  }

  const handleInputClear = () => {
    setInput('')
  }

  const handleInputDelete = () => {
    let newInput = input.substr(0, input.length - 1)
    setInput(newInput)
  }
  const handleResult = () => {
    let eso = eval(input)
    let convert = String(eso)
    setInput(eso)
  }

  return (
    <div className="App">
      <div className='contenedor_calculadora'>
        <input className='calculadora_input' value={input}/>
        <div className='contenedor_botones'>
          <button className='button_long' onClick={() => handleInputClear()}>Clear</button>
          <button className='button color' onClick={() => handleInputDelete()}>C</button>
          <button className='button color' onClick={() => handleInput('/') }>/</button>
          <button className='button' onClick={() => handleInput('7') }>7</button>
          <button className='button' onClick={() => handleInput('8') }>8</button>
          <button className='button' onClick={() => handleInput('9') }>9</button>
          <button className='button color' onClick={() => handleInput('*') }>*</button>
          <button className='button' onClick={() => handleInput('4') }>4</button>
          <button className='button' onClick={() => handleInput('5') }>5</button>
          <button className='button' onClick={() => handleInput('6') }>6</button>
          <button className='button color' onClick={() => handleInput('-') }>-</button>
          <button className='button' onClick={() => handleInput('1') }>1</button>
          <button className='button' onClick={() => handleInput('2') }>2</button>
          <button className='button' onClick={() => handleInput('3') }>3</button>
          <button className='button color' onClick={() => handleInput('+') }>+</button>
          <button className='button' onClick={() => handleInput('0') }>0</button>
          <button className='button color' onClick={() => handleInput('.') }>.</button>
          <button className='button_long' onClick={()=> handleResult()}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
