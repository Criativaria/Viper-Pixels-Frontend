import styled from 'styled-components'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { CreateUser } from '../API/User'

export default function Cadastro() {

    const [cadastro, setCadastro] = useState("")
    const [senha, setSenha] = useState("")

    return (

        <LoginWrapper>
            <div>
                <div>
                    <Titulo>cadastro</Titulo>
                    <Subtitulo>
                        <P>já é de casa? </P>
                        <Link to="/login">
                            <PVerde> faça login.</PVerde>
                        </Link>
                    </Subtitulo>
                </div>
                <Inputs>
                    <div>
                        <TextoInput>cadastro</TextoInput>
                        <Input type="text" onChange={(event) => setCadastro(event.target.value)} />
                    </div>
                    <div>
                        <TextoInput>senha</TextoInput>
                        <Input type="password" onChange={(event) => setSenha(event.target.value)} />
                    </div>
                    <Link to="/esqueceusenha">
                        < EsqueceuSenha > esqueceu sua senha?</EsqueceuSenha>
                    </Link>
                    <Botao onClick={() => CreateUser(cadastro, senha)}>criar conta</Botao>
                </Inputs>
            </div >
            <div>
                <Img src={logo} alt="Viper Pixels" />
            </div>

        </LoginWrapper >

    )

}

const LoginWrapper = styled.div`

    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    padding-inline: 8rem;
    padding-block: 9rem;
    gap: 20rem;
`

const Img = styled.img`
    width: 30rem;
`

const Input = styled.input`

    height: 2rem;
    width: 20rem;
    background-color: rgba(255, 255, 255, 0.05);
    color: aliceblue;
    padding-inline: 10px;
`

const Inputs = styled.div`
    margin-top: 2rem;
`

const Titulo = styled.h2`
    font-size: 24px;
    color: aliceblue;
    font-weight: 400px;
    padding-top: 2rem;
    `
const Subtitulo = styled.div`
    display: flex;
    flex-direction: row;
    padding: 6px;
`
const P = styled.p`
    color: aliceblue;
    font-size: 14px;
`
const TextoInput = styled.p`
    color: aliceblue;
    font-size: 12px;
    padding-top: 2rem;
    padding-bottom: 0.5rem;
    padding-left: 10px;
`
const EsqueceuSenha = styled.p`
    color: rgba(255, 255, 255, 0.50);
    font-size: 12px;
    padding: 24px;
`
const PVerde = styled.p`
    color: #41F614;
    font-size: 14px;
`

const Botao = styled.button`
    height: 3rem;
    width: 20rem;
    background-color: #41F614;
`