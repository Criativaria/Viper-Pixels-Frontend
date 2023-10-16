import styled from 'styled-components'

export default function Comousar() {

    const creditos = [

        {
            link: "https://www.youtube.com/@FRTTT",
            nome: "FRTT"
        },
        {
            link: "https://www.youtube.com/@Coreanowo",
            nome: "Coreano"
        },
        {
            link: "https://www.youtube.com/@SouzonesValorant",
            nome: "Souzones"
        },
        {
            link: "https://www.twitch.tv/tuyzvlr",
            nome: "Tuyzvlr"
        },
        {
            link: "https://www.youtube.com/@DicasdoColiValorant/videos",
            nome: "DicasdoColi"
        },
        {
            link: "https://www.youtube.com/@snapexels",
            nome: "Snapexels"
        }

    ]

    const ajudas = [

        {
            link: "https://folkcoreano.vercel.app",
            nome: "folkcoreano"
        },
        {
            link: "https://linktr.ee/lissatransborda",
            nome: "Lissa Transborda"
        },
        {
            link: "https://linktr.ee/morgannadev",
            nome: "Morganna Dev"
        },
        {
            link: "https://github.com/gustmnds",
            nome: "ButterSky"
        },
        {
            link: "https://github.com/hahhen",
            nome: "Hahhen"
        },
        {
            link: "https://doceazedo.com",
            nome: "DoceAzedo"
        }

    ]

    return (
        <>
            <Titulo>como usar o viper pixels</Titulo>

            <div>
                <P>
                    - selecione o mapa que irá jogar, ou que pretende aprender pixels novos, e selecione qual pixel gostaria de aprender. <br />
                    - você pode selecionar a estrelinha na parte inferior dos mapas/pixels e eles vão aparecer em primeiro.<br />
                    - você também pode escolher se pretende ver os pixels com imagens e gif ou só ver gif :)
                </P>
            </div>

            <P>Pessoas que ajudaram a criar o site!</P>

            {
                ajudas.map((ajuda) =>
                    <div key={ajuda.link}>
                        <a href={ajuda.link} target="_blank" rel="noreferrer">
                            <Text>{ajuda.nome}</Text>
                        </a>
                    </div >)

            }

            <P>Credito dos pixels</P>

            {
                creditos.map((credito) =>
                    <div key={credito.link}>
                        <a href={credito.link} target="_blank" rel="noreferrer">
                            <Text>{credito.nome}</Text>
                        </a>
                    </div >)

            }
        </>

    )

}


const Titulo = styled.h2`
    font-size: 24px;
    color: aliceblue;
    font-weight: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const P = styled.p`
    color: aliceblue;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
`
const Text = styled.p`
     color: aliceblue;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    
`