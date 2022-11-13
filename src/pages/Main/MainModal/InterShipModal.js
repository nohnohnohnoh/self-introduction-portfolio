import React, { useState, useEffect } from 'react'
import '../MainModal/InterShipModal.scss'

const InterShipModal = ({ handleModal, onInterShipModal, interShip }) => {
  return (
    <div onClick={onInterShipModal} className="modal">
      <div
        className={handleModal ? 'modalOpen' : 'modalClose'}
        onClick={(event) => event.stopPropagation()}
      >
        <section className="modalSection">
          <div className="offClick" onClick={onInterShipModal}>
            X
          </div>
          <header className="modalHeader">InterShip</header>
          <div className="headerContentBox">
            <img className="logoImg" src="/images/머치스퀘어.png" />
            <img src="" />
            <div className="headerContent">
              <div className="headerContentList">회사이름 : 머치스퀘어</div>
              <div className="headerContentList">
                기간 : 2022.04.25 ~ 2022.05.20
              </div>
              <div className="headerContentList">
                업무내용 : InterShip COJAM NFT 사이트 리팩토링
              </div>
            </div>
          </div>
          <hr />
          <header className="listOneHeader">InterShip 업무 내용</header>
          <ul className="listOne">
            <li>
              1. sass, 변수통일에 대한 리팩토링 과 sass mixin을 통한 반응형 웹
              리팩토링을 진행.
            </li>
            <li>
              2. axios를 걷어내고 ReactQuery에 대한 custom hook을 만들어
              useReactQuery로 가독성을 높인 리팩토링을 진행.
            </li>
            <li>
              3. ReactInfiniteQuery, Intersection Observer 라이브러리를 통해
              무한스크롤을 구현해 결과물의 완성도를 높임.
            </li>
            <li>
              4. ReactQuery로 리팩토링 작업이 진행되는 중 querykey에 대해
              error가 나는 부분 핸들링 작업을 완료.
            </li>
          </ul>
          <hr />
          <header className="listTwoHeader">InterShip 작업 중 느낀 점</header>
          <ul className="listTwo">
            <li>
              1. 프로젝트를 진행하기 전에 통일할 부분을 미리 맞추어
              진행해야겠다고 느낌.
            </li>
            <li>
              2. 처음 작업할 때 기본 뼈대 작업이 튼튼해야 나중에 리팩토링 및
              추가기능을 추가 할 때 수월 하다는걸 느꼈고 추후에 있을
              프로젝트에서 기본 뼈대 작업의 신경을 많이 써야겠다고 느낌.
            </li>
            <li>
              3. 단순히 기능을 구현하는 것 보다는 나중에 다른 개발자가 진행할
              디버깅 및 리팩토링 작업을 위해서 가독성 높은 코드가 훨씬
              중요하다는걸 느낌.
            </li>
            <li>4. 유지보수가 다시 한번 중요하다는걸 느낌.</li>
            <li>
              5. 사소한걸 리팩토링하더라도 다른 페이지에서 에러가 날 수 있기에
              리팩토링 작업이 정말 큰 작업이라는 걸 느낌.
            </li>
          </ul>
          <hr />
          <header className="listThreeHeader">
            느낀 점을 토대로 바뀌어야 하는 개발 자세
          </header>
          <ul className="listThree">
            <li>
              1. div를 무작정 치는 것이 아닌 semantic tag를 씀으로써
              유지보수성이 좋고 가독성이 좋은 코드.
            </li>
            <li>
              2. 한 눈에 보기 좋은 파일 위치 컴포넌트 위치로 구조 파악이 쉽게
              개발하는 자세.
            </li>
            <li>
              3. 코드 수정 및 기능 추가에 대한 작업을 할 때 변수 이름을 바꾸는
              것만으로 에러가 날 수 있으니 천천히 차분한 마음가짐과 수시로
              확인하는 습관.
            </li>
            <li>
              4. 혼자서 하는 개발이 아닌 다같이 하는 개발 그로 인한 다른
              개발자를 위한 배려가 들어간 코드.
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default InterShipModal
