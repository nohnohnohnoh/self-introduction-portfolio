import React from 'react'
import './MainStyles/Myself.scss'

const MySelf = () => {
  return (
    <div className="mySelf">
      <div className="mySelfHead">Front-End 개발자 노영완입니다.</div>
      <ul className="mySelfBox">
        <li className="mySelfBoxContents">
          재미있게 긍정적으로 사는 사람들을 동경합니다.
        </li>
        <li className="mySelfBoxContents">
          안 하는 것은 있어도 안 되는 것은 없다고 굳게 믿어 도전적으로 사는 것을
          추구합니다.
        </li>
        <li className="mySelfBoxContents">
          사람들과 더불어 살 때 자기의 가장큰 능력이 나오고 가장 행복하다고
          믿습니다.
        </li>
      </ul>
    </div>
  )
}

export default MySelf
