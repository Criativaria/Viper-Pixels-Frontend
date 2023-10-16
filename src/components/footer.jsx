import styled from 'styled-components'

export default function Footer() {

    return (

        <>
            <Div>
                <P>
                    Olá! Aqui é a Criativaria, esse site foi feito por mim, com muito carinho, espero que goste :)
                    Apenas um adendo antes de começar. Esse é site feito sem fins lucrativos, para diversão e estudo! E para mais informações você pode ler o
                </P><a href="https://www.riotgames.com/pt-br/terms-of-service-BR#id.svas12uxrnjp" target='_blanck'><PLink>lenga lenga juridico da Riot</PLink></a>
            </Div>
        </>

    )

}

const Div = styled.div`
position: relative;
    padding-inline: 10rem;
    padding-top: 5rem;
    bottom: 0;
`

const P = styled.p`
    display: flex;
    justify-content: center;
    text-align: center;
    color: aliceblue;
    font-size: 14px;
`
const PLink = styled.p`
    color: #41F614;
    font-size: 14px;
    text-align: center;
`