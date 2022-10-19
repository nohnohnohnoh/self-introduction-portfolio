import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from '../pages/Main/Main'
import Potpollo from '../pages/Potpollo/Potpollo'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
