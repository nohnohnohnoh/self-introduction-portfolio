import React from 'react'

const InterShipModal = () => {
  return (
    <div className="backGround">
      <div className="InterShipModal">
        <div className="headBox">
          <div>머치스퀘어</div>
          <div>2022.04.25 ~ 2022.05.20</div>
          <div>업무 내용 : InterShip 기간동안 COJAM NFT 사이트 리팩토링</div>
        </div>
        <ul>
          <li>
            sass, 변수통일에 대한 리팩토링 과 sass mixin을 통한 반응형 웹
            리팩토링을 진행
          </li>
          <li>
            axios를 걷어내고 ReactQuery에 대한 customhook을 만들어
            useReactQuery로 가독성을 높인 리팩토링을 진행
          </li>
          <li>
            ReactInfiniteQuery, Intersection Observer 라이브러리를 통해 무한
            스크롤을 구현해 결과물의 완성도를 높임
          </li>
          <li>
            ReactQuery로 리팩토링 작업이 진행되는 중 queryket에 대해 error가
            나는 부분 핸들링 작업을 완료
          </li>
        </ul>
      </div>
    </div>
  )
}

export default InterShipModal
