import logo from '../assets/logo.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
export default function Header() {

    return (

        <HeaderWrapper>
            <Logo src={logo} alt="Viper Pixels Logo" />
            <NavBar>
                <Link to="/">
                    <Li>home</Li>
                </Link>
                <Link to="/perfil">
                    <Li>sua conta</Li>
                </Link>
                <Link to="/comousar">
                    <Li>como usar</Li>
                </Link>
            </NavBar>
        </HeaderWrapper>

    )

}

const HeaderWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    background: transparent;
`
const Logo = styled.img`
    width: 17rem;
    padding-left: 32px;
`
const NavBar = styled.ul`
display: flex;
flex-direction: row;
justify-content: space-around;
padding-left: 32px;
`
const Li = styled.li`
color: aliceblue;
padding: 3rem;
font-size: 14px;
font-family: Krona One;
`


