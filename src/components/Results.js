import React from 'react'

const Results = props => (
  <div className="content-container">
    <div className="text-body">
      {
        props.userChoice && <p className="text-body">You chose { props.userChoice }.</p>
      }
      {
        props.cpuChoice && <p className="text-body">CPU chose { props.cpuChoice }.</p>
      }
      {
        props.getWinner(props.userChoice, props.cpuChoice) && <p className="text-body">{ props.getWinner(props.userChoice, props.cpuChoice) }</p>
      }
    </div>
  </div>
)

export default Results
