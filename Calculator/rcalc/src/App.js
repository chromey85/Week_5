import { useState } from "react"
import { evaluate } from "mathjs"

const App = () => {
  const buttons = ["7", "8", "9", "c", "4", "5", "6", "*", "1", "2", "3", "/", "+", "0", "-", "="]
  const [display, setDisplay] = useState("")

  const handler = (button) => {
    if(button === "="){
      setDisplay(evaluate(display))
    } else if(button === "c"){
      setDisplay("")
    } else {
      setDisplay(display + button)
    }
  }

  return (
    <div>
      <h1>React Calculator</h1>
      <h2>{display}</h2>
        {buttons.map((button, index) => {
          return <button onClick={() => handler(button)}>{button}</button>
        })
      }
    </div>
  )
}

export default App