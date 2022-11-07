import React, { useState, useEffect } from 'react'
import * as Scroll from 'react-scroll'
import Contact from './Contact'
import MySelf from './Myself'
import Project from './Project'
import Stacks from './Stacks'
import About from './About'
import './MainStyles/Main.scss'

const Main = () => {
  let Link = Scroll.Link
  let Element = Scroll.Element

  return (
    <main className="main">
      <ul className="mainNav">
        <Link
          className="mainNavContents"
          spy={true}
          to="1"
          smooth="true"
          duration={200}
        >
          <li>Self-Introduction</li>
        </Link>

        <Link
          className="mainNavContents"
          spy={true}
          to="2"
          smooth="true"
          duration={1000}
        >
          <li>Project</li>
        </Link>
        <Link
          className="mainNavContents"
          spy={true}
          to="3"
          smooth="true"
          duration={1500}
        >
          <li>Stacks</li>
        </Link>
        <Link
          className="mainNavContents"
          spy={true}
          to="4"
          smooth="true"
          duration={2000}
        >
          <li>About</li>
        </Link>
        <Link
          className="mainNavContents"
          spy={true}
          to="5"
          smooth="true"
          duration={2500}
        >
          <li>Contact</li>
        </Link>
      </ul>
      <Element id="1">
        <MySelf />
      </Element>
      <Element id="2">
        <Project />
      </Element>
      <Element id="3">
        <Stacks />
      </Element>
      <Element id="4">
        <About />
      </Element>
      <Element id="5">
        <Contact />
      </Element>
    </main>
  )
}

export default Main
