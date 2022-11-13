import React, { useState, useEffect, useRef } from 'react'
import './MainStyles/About.scss'
import Wecode from './SwiperSlides/Wecode'
import InterShip from './SwiperSlides/InterShip'
import InterShipModal from '../Main/MainModal/InterShipModal'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import { BiDetail } from 'react-icons/bi'
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs'

const About = () => {
  const [handleModal, setHandleModal] = useState(false)
  const [detailMouseOn, setDetailMouseOn] = useState(false)
  const interShip = useRef()

  const onInterShipModal = () => {
    setHandleModal(!handleModal)
  }

  const offInterShipModal = () => {
    setHandleModal(false)
  }

  const detailMouseOver = () => {
    setDetailMouseOn(true)
  }

  const deatilMouseLeave = () => {
    setDetailMouseOn(false)
  }

  SwiperCore.use([Navigation, Pagination])

  return (
    <div className="about">
      <div className="center">
        <Swiper
          className="swiper"
          slidesPerView={1}
          navigation={{
            prevEl: '.prev',
            nextEl: '.next',
          }}
        >
          <SwiperSlide>
            <Wecode />
          </SwiperSlide>
          <SwiperSlide>
            <InterShip />
            <div className="link">
              <div
                onMouseOver={detailMouseOver}
                onMouseLeave={deatilMouseLeave}
                onClick={onInterShipModal}
                className="detailBox"
              >
                <BiDetail
                  className={detailMouseOn ? 'activeDetail' : 'detailLogo'}
                />
                <div className="activeText">
                  {detailMouseOn && <div>상세내용</div>}
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <BsArrowLeftCircle className="prev" />
        <BsArrowRightCircle className="next" />
      </div>
      {handleModal ? (
        <InterShipModal
          handleModal={handleModal}
          onInterShipModal={onInterShipModal}
          interShip={interShip}
        />
      ) : null}
    </div>
  )
}

export default About
