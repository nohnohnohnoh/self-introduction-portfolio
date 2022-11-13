import React from 'react'
import { IoLogoJavascript } from 'react-icons/io'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiReact, DiCss3 } from 'react-icons/di'

const Fruits = () => {
  return (
    <div className="card">
      <div className="wrap">
        <div className="front">
          <img
            className="fruitsImg"
            src="/images/프룯츠.png"
            alt="프룯츠 프로젝트"
          />
          <header className="projectHeader">Fruits Project</header>
          <ul className="projectSection">
            <li className="projectSectionContent">
              과채, 과채주스, Gift등의 정보를 제공 및 판매하는 사이트.
            </li>
            <li className="projectSectionContent">
              Frits 커피사이트를 모티브로 진행하였습니다.
            </li>
          </ul>
          <div className="toolSection">
            <div className="technology">
              <div className="technologyHead">Technology Stack</div>
              <AiFillHtml5 className="html" />
              <DiCss3 className="css" />
              <IoLogoJavascript className="javaScript" />
              <DiReact className="react" />
            </div>
            <div className="taskTool">
              <div className="taskToolHead">Task tool</div>
              <div className="taskToolSection">
                <div className="trello">trello</div>
                <div className="slack">slack</div>
                <div className="notion">notion</div>
              </div>
            </div>
          </div>
        </div>
        <div className="back">
          <div className="projectBackSection">
            <header className="firstHeader">프로젝트 소개</header>
            <hr />
            <ul className="fristSection">
              <li>프로젝트 소요시간: 2주</li>
              <li>프로젝트 인원: Front:3명 Back:2명</li>
              <li>stacks : HTML5 CSS3 JavaScript React git(merge) github</li>
              <li>담당한 부분 : Main TeamMember소개</li>
            </ul>
            <header className="secondHeader">프로젝트 진행과정</header>
            <hr />
            <ul className="secondSection">
              <li>
                1. 개발기간이 짧은 만큼 Scrum 방식으로 개발주기는 한 주로 Sprint
                진행.
              </li>
              <li>
                2. 매일 오전 11시 Daily standing up 미팅을 통해 전날 진행사항 및
                블로커등을 공유 각자 개인의 의견을 이야기해 피드백 및 개선점
                공유
              </li>
              <li>3. 라이브러리 사용하지 않고 진행한 프로젝트.</li>
              <li>4. git 관리는 merge로 진행.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fruits
