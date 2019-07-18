import React, { useState } from 'react'

const App = () => {

  const [ userChoice, setUserChoice ] = useState()
  const [ cpuChoice, setCpuChoice ] = useState()

  const options = ['Rock', 'Paper', 'Scissors']

  const generateCpuChoice = () => {
    const randomNumber = Math.floor(Math.random() * options.length)
    return options[randomNumber]
  }

  const getWinner = (user, cpu) => {

    switch(user) {
      case (options[0]):
        if (cpu === options[0]) return `It's a Tie`
        if (cpu === options[2]) return `You Won!!!`
        if (cpu === options[1]) return `You Lost.`
        break
      case (options[1]):
        if (cpu === options[1]) return `It's a Tie`
        if (cpu === options[0]) return `You Won!!!`
        if (cpu === options[2]) return `You Lost.`
        break
      case (options[2]):
        if (cpu === options[2]) return `It's a Tie`
        if (cpu === options[1]) return `You Won!!!`
        if (cpu === options[0]) return `You Lost.`
        break
      default:
        return undefined
    }
  }

  const handleOnClick = async e => {
    setUserChoice(e.target.innerHTML)
    setCpuChoice(generateCpuChoice())
  }

  return (
    <div className="content-container">
      <div className="App">
        {
          options.map((option, i) => (
            <button
              className="button"
              key={ i }
              onClick={ handleOnClick }
            >
              { option }
            </button>
          ))
        }
        <div className="text-body">
          {
            userChoice && <p className="text-body">You chose { userChoice }.</p>
          }
          {
            cpuChoice && <p className="text-body">CPU chose { cpuChoice }.</p>
          }
          {
            getWinner(userChoice, cpuChoice) && <p className="text-body">{ getWinner(userChoice, cpuChoice) }</p>
          }
        </div>
      </div>
    </div>
  )
}

export default App
