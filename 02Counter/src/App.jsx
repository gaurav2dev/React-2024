import { useState } from 'react'
import './App.css'


function App() {
  let [count, setCount] = useState(0)
  const [errorMessage, setErrorMessage] = useState('');
  const addValue = () => {
    count += 1
    setCount(count)
    setErrorMessage('');
  }
  const subValue = () => {
    if (count <= 0) {
      setErrorMessage('Cannot decrease less than zero');
      return <h3>Cannot decrease less than zero</h3>
    }
    count -= 1
    setCount(count)
    setErrorMessage('');
  }
  return (
    <>
      <h1>Counter Task</h1>
      {<h4>{errorMessage}</h4>}
      <h3>Counter Value : {count}</h3>
      <button onClick={addValue} id='increase'>
        Increase {count}
      </button>
      <button onClick={subValue} id='decrease'>
        Decrease{count}
      </button>
      <footer>Count {count}</footer>
    </>
  )
}

export default App
