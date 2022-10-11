import React, { useState, useEffect } from 'react'
import '../MainModal/InterShipModal.scss'

const InterShipModal = ({ handleModal, offInterShipModal }) => {
  const [animate, setAnimate] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (visible && !handleModal) {
      setAnimate(true)
      setTimeout(() => setAnimate(false), 250)
    }
    setAnimate(handleModal)
  }, [visible, handleModal])

  if (!animate && !visible) return null
  return (
    <div className={handleModal ? 'modal open' : 'modal close'}>
      <section>
        <header>
          <div>안녕하헤요</div>
          <button className="close" onClick={offInterShipModal}>
            &times;
          </button>
        </header>
        <main>안녕</main>
        <footer>
          <button className="close" onClick={offInterShipModal}>
            close
          </button>
        </footer>
      </section>
    </div>
  )
}

export default InterShipModal
