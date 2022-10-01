import React from 'react'
import { Link } from 'react-scroll/modules'
import Contact from './Contact'
import MySelf from './Myself'
import Project from './Project'
import Stacks from './Stacks'
import About from './About'
import './MainStyles/Main.scss'

const Main = () => {
  return (
    <main className="main">
      <ul className="mainNav">
        <Link to="1" smooth="true" duration={200}>
          <li className="mainNavContents">Self-Introduction</li>
        </Link>
        <Link to="2" smooth="true" duration={200}>
          <li className="mainNavContents">Project</li>
        </Link>
        <Link to="3" smooth="true" duration={200}>
          <li className="mainNavContents">Stacks</li>
        </Link>
        <Link to="4" smooth="true" duration={200}>
          <li className="mainNavContents">About</li>
        </Link>
        <Link to="5" smooth="true" duration={200}>
          <li className="mainNavContents">Contact</li>
        </Link>
      </ul>
      <div id="1">
        <MySelf />
      </div>
      <div id="2">
        <Project />
      </div>
      <div id="3">
        <Stacks />
      </div>
      <div id="4">
        <About />
      </div>
      <div id="5">
        <Contact />
      </div>
    </main>
  )
}

export default Main
