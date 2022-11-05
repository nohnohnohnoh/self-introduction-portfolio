import React from 'react'
import './MainStyles/Stacks.scss'
import ProgressBar from 'react-animated-progress-bar'

const Stacks = () => {
  return (
    <div className="stacks">
      <div class="bar-container">
        <h2>HTML</h2>
        <ul>
          <li>
            <span class="css-progressbar bar" />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Stacks
