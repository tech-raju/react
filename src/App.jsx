import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10)

  // let counter = 55

  const addValue = () => {
    if (counter < 20){
      counter = counter + 1
      setCounter(counter)

    }else{
      alert("Counter can't go more than 20")
    }
    // console.log("clicked", counter)
  }

  const removeValue = () => {
    if(counter > 0){
      setCounter(counter -1)
    }else{
      alert("Counter can't go below to ")
    }
  }

  return (
    <>
      <h1>React</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value: {counter}</button>
      <br />
      <button
      onClick={removeValue}
      >Remove value: {counter}</button>

    </>
  )
}

export default App
