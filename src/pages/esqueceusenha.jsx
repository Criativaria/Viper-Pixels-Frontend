import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ChangeUser } from '../API/User'

export default function EsqueceuSenha() {

    const [cadastro, setCadastro] = useState("")
    const [novaSenha, setNovaSenha] = useState("")

    return (

        <SenhaWrapper>
            <div>
                <div>
                    <Titulo>Esqueceu a senha?</Titulo>
                    <Subtitulo>
                        <P>clicou sem querer? </P>
                        <Link to="/login">
                            <PVerde> volte ao login.</PVerde>
                        </Link>
                    </Subtitulo>
                </div>
                <Inputs>
                    <div>
                        <TextoInput>cadastro</TextoInput>
                        <Input type="text" onChange={(event) => setCadastro(event.target.value)} />
                    </div>
                    <div>
                        <TextoInput>nova senha</TextoInput>
                        <Input type="password" onChange={(event) => setNovaSenha(event.target.value)} />
                    </div>
                    <Botao onClick={() => ChangeUser(cadastro, novaSenha)}>
                        atualizar a senha
                    </Botao>
                </Inputs>
            </div>

        </SenhaWrapper>

    )

}

const SenhaWrapper = styled.div`

    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    padding-inline: 8rem;
    padding-block: 9rem;
    gap: 20rem;
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
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    `

const Titulo = styled.h2`
    font-size: 24px;
    color: aliceblue;
    font-weight: 400px;
    padding: 1rem;
    `
const Subtitulo = styled.div`
    display: flex;
    flex-direction: column;
    margin-block: 10px;
    padding: 1rem;
`
const P = styled.p`
    color: aliceblue;
    font-size: 14px;
    `
const TextoInput = styled.p`
    color: aliceblue;
    font-size: 12px;
    padding-block: 1rem;
    padding-left: 10px;
`
const PVerde = styled.p`
    color: #41F614;
    font-size:14px;
`

const Botao = styled.button`
    height: 3rem;
    width: 20rem;
    background-color: #41F614;
    margin-top: 2rem;
`