import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from '../pages/Main/Main'
import Potpollo from '../pages/Potpollo/Potpollo'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/potpollo" element={<Potpollo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
