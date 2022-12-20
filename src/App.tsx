import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <h2>Todoリスト with Typescript</h2>
        <form onSubmit={() => {}}>
          <input type="text" onChange={() => {}} className="inputText" />
          <input type="submit" value="作成" className="submitButton" />
        </form>
      </div>
    </div>
  )
}

export default App
