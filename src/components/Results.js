import React from 'react'

const Results = props => (
  <div className="content-container">
    {
      props.getWinner(props.userChoice, props.cpuChoice) && <p className="results-text">{ props.getWinner(props.userChoice, props.cpuChoice) }</p>
    }
    {
      props.userChoice && <p className="results-text">You chose { props.userChoice }.</p>
    }
    {
      props.cpuChoice && <p className="results-text">CPU chose { props.cpuChoice }.</p>
    }
  </div>
)

export default Results
