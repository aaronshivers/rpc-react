import React, { useState } from 'react'
import Results from './Results'

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
      <Results
        userChoice={ userChoice }
        cpuChoice={ cpuChoice }
        getWinner={ getWinner }
      />
    </div>
  )
}

export default App
