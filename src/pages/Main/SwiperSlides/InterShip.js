import { React } from 'react'

const InterShip = () => {
  return (
    <div className="card">
      <div className="wrap">
        <div className="front">
          <img
            className="interShipImg"
            src="/images/머치스퀘어.png"
            alt="interShip"
          />
        </div>
        <div className="back">
          <section className="backSection">
            <header className="backHeader">InterShip</header>
            <hr />
            <ul className="backList">
              <li>1.한달의 기간동안 InterShip을 진행하였습니다.</li>
              <li>
                2.front 1명 back 2명의 인원으로 리팩토링을 진행하였습니다.
              </li>
              <li>
                3.기업에서 진행하고 있는 프로젝트를 리팩토링 하는 업무를
                진행하였습니다.
              </li>
              <li>4.react-qeury에 대한 리팩토링을 진행하였습니다.</li>
            </ul>
            <div className="endText">
              &#8251;상세한 내용은 아래 상세내용 아이콘을 클릭하여 주세요.
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default InterShip
