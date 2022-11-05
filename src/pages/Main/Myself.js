import React, { useState } from 'react'
import './MainStyles/Myself.scss'
import { TypeAnimation } from 'react-type-animation'

const MySelf = () => {
  const [typing, setTyping] = useState()

  return (
    <div className="mySelf">
      <div className="typingContent">
        <div>
          <TypeAnimation
            sequence={'Front-End 개발자 노영완입니다.'}
            wrapper="div"
            cursor={false}
            repeat={0}
            style={{ fontSize: '1.5rem' }}
          />
          <TypeAnimation
            sequence={[
              () => {
                return new Promise((resolve) => setTimeout(resolve, 3000))
              },
              ,
              ' 재미있게 긍정적으로 사는 사람들을 동경합니다.',
            ]}
            wrapper="div"
            cursor={false}
            repeat={0}
            style={{ fontSize: '1.5rem' }}
          />
          <TypeAnimation
            sequence={[
              () => {
                return new Promise((resolve) => setTimeout(resolve, 6000))
              },
              ,
              ' 안 하는 것은 있어도 안 되는 것은 없다고 굳게 믿어 도전적으로 사는 것을 추구합니다.',
            ]}
            wrapper="div"
            cursor={false}
            repeat={0}
            style={{ fontSize: '1.5rem' }}
          />
          <TypeAnimation
            sequence={[
              () => {
                return new Promise((resolve) => setTimeout(resolve, 10000))
              },
              ,
              '사람들과 더불어 살 때 자기의 가장 큰 능력이 나오고 가장 많은 성장을 하고 가장 행복하다고 믿습니다.',
            ]}
            wrapper="div"
            cursor={false}
            repeat={0}
            style={{ fontSize: '1.5rem' }}
          />
        </div>
      </div>
    </div>
  )
}

export default MySelf
