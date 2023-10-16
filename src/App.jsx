import { Outlet } from 'react-router-dom'
import Header from './components/header'
import styled from 'styled-components'
import Footer from './components/footer'
function App() {


  return (
    <>
      <Background></Background>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App

const Background = styled.div`
  position: absolute;
  z-index: -2;
  width: 100vw;
  height: 100vh;
  background: #0E0F10;
  background-image: url(src/assets/grid.svg);
  `