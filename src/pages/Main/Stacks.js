import React from 'react'
import './MainStyles/Stacks.scss'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiReact, DiCss3 } from 'react-icons/di'
import { SiStyledcomponents, SiTypescript } from 'react-icons/si'
import { IoLogoJavascript } from 'react-icons/io'
import { AiFillGithub } from 'react-icons/ai'
import { SiNotion } from 'react-icons/si'
import { FaGitAlt } from 'react-icons/fa'
import { BsSlack } from 'react-icons/bs'

const Stacks = () => {
  return (
    <div className="stacks">
      <div className="stacksBox">
        <section className="stacksBoxone">
          <header className="technologyStackHeader">Technology Stack</header>
          <div className="technologyStack">
            <div className="technologyStackBox">
              <div className="htmlLogo">
                <AiFillHtml5 />
              </div>
              <div className="text">Html5</div>
            </div>
            <div className="technologyStackBox">
              <div>
                <DiCss3 className="cssLogo" />
              </div>
              <div className="text">CSS3</div>
            </div>
            <div className="technologyStackBox">
              <div className="reactLogo">
                <DiReact />
              </div>
              <div className="text">React</div>
            </div>
            <div className="technologyStackBox">
              <div className="javaScriptLogo">
                <IoLogoJavascript />
              </div>
              <div className="text">JavaScript</div>
            </div>
            <div className="technologyStackBox">
              <div className="typeScriptLogo">
                <SiTypescript />
              </div>
              <div className="text">JavaScript</div>
            </div>
            <div className="technologyStackBox">
              <div className="styledLogo">
                <SiStyledcomponents />
              </div>
              <div className="Text">Styled</div>
              <div className="Text">Componets</div>
            </div>
          </div>
        </section>
        <section className="stacksBoxTwo">
          <header className="taskToolHeader">Task Tool</header>
          <div className="taskTool">
            <div className="taskToolBox">
              <div className="notionLogo">
                <SiNotion />
              </div>
              <div className="text">Notion</div>
            </div>
            <div className="taskToolBox">
              <div className="githubLogo">
                <AiFillGithub />
              </div>
              <div className="text">Github</div>
            </div>
            <div className="taskToolBox">
              <div className="gitLogo">
                <FaGitAlt />
              </div>
              <div className="text">git</div>
              <div>merge</div>
              <div>rebase</div>
            </div>
            <div className="taskToolBox">
              <div className="slackLogo">
                <BsSlack />
              </div>
              <div className="text">Slack</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Stacks
