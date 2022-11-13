import React from 'react'

const Wecode = () => {
  return (
    <div className="card">
      <div className="wrap">
        <div className="front">
          <img className="wecodeImg" src="/images/wecode.png" alt="wecode" />
        </div>
        <div className="back">
          <section className="backSection">
            <header className="backHeader">
              Wecode bootcamp를 수료했습니다.
            </header>
            <hr />
            <ul className="backList">
              <li>
                1.html5, css3, JavaScript, React, git 등과 같은 stacks을
                익혔습니다.
              </li>
              <li>
                2.실제 협업과 같은 Project를 진행하면서 Project에서 중요하고
                제가 무엇이 부족한지 알 수 있었습니다.
              </li>
              <li>
                3.코드를 잘치는 만큼 소통이 중요하다는 것을 알 수 있었습니다.
              </li>
              <li>
                4.InterShip을 통해 실제 기업의 환경을 직접적으로 경험할 수
                있었고 스스로의 발전이 멈추면 안된다는 걸 알 수 있었습니다.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Wecode
