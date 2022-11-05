import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll/modules'
import { ScrollingProvider, Section } from 'react-scroll-section'
import SectionContainer from './SectionContainer'
import { Menu, Item } from './Menu'
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
