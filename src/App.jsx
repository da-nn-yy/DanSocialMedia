import './App.css'
import { useState } from 'react'

function App() {

const [count,setCount] = useState(0)

  const incr = () => {
    setCount(count + 1)
  }
   const decr = () => {
    setCount(count - 1)
  }
   const restart = () => {
    setCount(0)
  }
  return (
    <>
      <h1>{count}</h1>

      <div style={{display:"flex" , justifyContent:"center", gap:"3rem", fontFamily:"Poppins"}}>
        <button onClick={incr}>Increase</button>
        <button onClick={decr}>Decrease</button>
        <button onClick={restart}>Restart</button>
      </div>
    </>
  )
}

export default App
