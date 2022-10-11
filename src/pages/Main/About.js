import React, { useState } from 'react'
import './MainStyles/About.scss'
import InterShipModal from './MainModal/InterShipModal'

const About = () => {
  const [handleModal, setHandleMdoal] = useState(false)

  const onInterShipModal = () => {
    setHandleMdoal(true)
    console.log(handleModal)
  }

  const offInterShipModal = () => {
    setHandleMdoal(false)
    console.log(handleModal)
  }

  return (
    <div className="about">
      <div className="aboutHead">
        <div className="aboutHeadLogo">04. About</div>
        <div className="aboutHeadText">Wecode bootCamp 수료 했습니다.</div>
        <div className="aboutHeadText">
          머치스퀘어 회사에 InterShip 경험이 있습니다.
        </div>
      </div>
      <div className="aboutBox">
        <div className="wecodeBox">
          <img className="wecodeImg" src="/images/wecode.png" />
          <div>Wecode Bootcaomp 수료</div>
        </div>
        <div className="interShipBox">
          <img className="interShipImg" src="/images/머치스퀘어.png" />
          <div>InterShip</div>
          <div onClick={onInterShipModal}>자세히 보기</div>
        </div>
      </div>
      <InterShipModal
        handleModal={handleModal}
        offInterShipModal={offInterShipModal}
      />
    </div>
  )
}

export default About
