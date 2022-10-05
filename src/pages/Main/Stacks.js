import React from 'react'
import './MainStyles/Stacks.scss'

const Stacks = () => {
  return (
    <div className="stacks">
      <div className="stacksHead">
        <div className="stacksHeadLogo">03. Stacks</div>
      </div>
      <hr className="secondLine"></hr>
      <div className="lineBox">
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
      </div>
      <div className="stacksContentsBox">
        <div className="javaScriptBox">
          <div>JavaScript</div>
        </div>
        <div className="reactBox">
          <div>React</div>
        </div>
        <div className="htmlBox">
          <div>HTML5/CSS</div>
        </div>
        <div className="gitBox">
          <div>Git</div>
        </div>
        <div className="taskBox">
          <div>Task Tool</div>
        </div>
      </div>
      <div className="lineBox">
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
      </div>
      <div className="test">
        <div className="javaScriptContentsBox">
          <div className="testone">ES6</div>
          <div>TypeScript</div>
        </div>
        <div className="reactContentsBox">
          <div>React-Router</div>
          <div>React Query</div>
        </div>
        <div className="htmlContentsBox">
          <div>Sass</div>
          <div>Styled-Componets</div>
        </div>
        <div className="gitContentsBox">
          <div>merge</div>
          <div>rebase</div>
        </div>
        <div className="taskToolBox">
          <div>notion</div>
        </div>
      </div>
    </div>
  )
}

export default Stacks
