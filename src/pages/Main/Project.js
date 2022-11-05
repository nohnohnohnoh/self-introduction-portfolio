import React, { useState } from 'react'
import './MainStyles/Project.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import Fruits from './Fruits'
import GoCloud from './GoCloud'
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs'
import { AiFillGithub, AiOutlineDesktop } from 'react-icons/ai'
import { SiNotion } from 'react-icons/si'

const Project = () => {
  const [githubMouseOn, setGithubMouseOn] = useState(false)
  const [notionMouseOn, setNotionMouseOn] = useState(false)
  const [desktopMouseOn, setDeskTopMouseOn] = useState(false)
  let menu = ['Fruits', 'GoCloud']

  const githubMouseOver = () => {
    setGithubMouseOn(true)
  }

  const githubMouseLeave = () => {
    setGithubMouseOn(false)
  }

  const notionMouseOver = () => {
    setNotionMouseOn(true)
  }

  const notionMouseLeave = () => {
    setNotionMouseOn(false)
  }

  const desktopMouseOver = () => {
    setDeskTopMouseOn(true)
  }

  const desktopMouseLeave = () => {
    setDeskTopMouseOn(false)
  }

  SwiperCore.use([Navigation, Pagination])
  return (
    <div className="project">
      <div className="center">
        <Swiper
          className="swiper"
          slidesPerView={1}
          navigation={{
            prevEl: '.prev',
            nextEl: '.next',
          }}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: (index, className) => {
              return (
                '<span class="' + className + '">' + menu[index] + '</span>'
              )
            },
          }}
        >
          <SwiperSlide>
            <Fruits />
            <div className="link">
              <div
                onMouseOver={githubMouseOver}
                onMouseLeave={githubMouseLeave}
                className="githubBox"
              >
                <a href="https://github.com/nohnohnohnoh/TheCreationOfWeb-frontend">
                  <AiFillGithub
                    className={githubMouseOn ? 'active' : 'github'}
                  />
                </a>
                <div className="activeGitHub">
                  {githubMouseOn && <div>GitHub</div>}
                </div>
              </div>
              <div
                onMouseOver={notionMouseOver}
                onMouseLeave={notionMouseLeave}
                className="notionBox"
              >
                <a href="">
                  <SiNotion className={notionMouseOn ? 'active' : 'notion'} />
                  <div className="activeNotion">
                    {notionMouseOn && <div>Notion</div>}
                  </div>
                </a>
              </div>
              <div
                onMouseOver={desktopMouseOver}
                onMouseLeave={desktopMouseLeave}
                className="desktopBox"
              >
                <AiOutlineDesktop
                  className={desktopMouseOn ? 'active' : 'desktop'}
                />
                <div className="activeDesktop">
                  {desktopMouseOn && <div>시연 영상</div>}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <GoCloud />
            <div className="link">
              <div
                onMouseOver={githubMouseOver}
                onMouseLeave={githubMouseLeave}
                className="githubBox"
              >
                <a href="https://github.com/nohnohnohnoh/GoCloud">
                  <AiFillGithub
                    className={githubMouseOn ? 'active' : 'github'}
                  />
                </a>
                <div className="activeGitHub">
                  {githubMouseOn && <div>GitHub</div>}
                </div>
              </div>
              <div
                onMouseOver={notionMouseOver}
                onMouseLeave={notionMouseLeave}
                className="notionBox"
              >
                <a>
                  <SiNotion className={notionMouseOn ? 'active' : 'notion'} />
                  <div className="activeNotion">
                    {notionMouseOn && <div>Notion</div>}
                  </div>
                </a>
              </div>
              <div
                onMouseOver={desktopMouseOver}
                onMouseLeave={desktopMouseLeave}
                className="desktopBox"
              >
                <AiOutlineDesktop
                  className={desktopMouseOn ? 'active' : 'desktop'}
                />
                <div className="activeDesktop">
                  {desktopMouseOn && <div>시연 영상</div>}
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-pagination"></div>
        <BsArrowLeftCircle className="prev" />
        <BsArrowRightCircle className="next" />
      </div>
    </div>
  )
}

export default Project
