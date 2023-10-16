import styled from 'styled-components'
import videoFumaca from '../assets/fumaca.mp4'
import { Link } from 'react-router-dom'
import Favoritos from '../components/favoritos'
// import url from '/src/data/viperpixels.json'
// import { useEffect } from 'react'

export default function Home() {


    // useEffect(() => {
    //     console.log(url)

    // }, [])



    return (
        <>
            <div>
                <Texto>
                    <Titulo>aprenda pixels da Viper</Titulo>
                    <P>escolha um mapa para começar:</P>
                </Texto>

                <Video src={videoFumaca} autoPlay loop muted />
            </div>


            <Mapas>
                <ImgMapa>


                    < Link to="/mapa">

                        <Img src="https://ik.imagekit.io/viperpixels/pixels/Bind/telaDeCarregamento.png?updatedAt=1676431087670" alt="mapa" />

                    </Link>

                    <HoverStar className='HoverStar'>

                        <Favoritos />
                    </HoverStar>
                </ImgMapa>
            </Mapas >




        </>
    )


}
const Video = styled.video`
    width: 100%;
    height: 100vh;
    object-fit: cover;
    position: absolute;
    top: 0;
    z-index: -1;
`
const Titulo = styled.h2`
    font-size: 24px;
    color: aliceblue;
    font-weight: 25rem;
    `
const P = styled.p`
    color: aliceblue;
    font-size: 14px;
`
const Texto = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Img = styled.img`
    max-width: 20rem;
`
const Mapas = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1.5rem;

    align-items: center;
    justify-content: center;
    padding-inline: 18rem;
`
const ImgMapa = styled.div`
    position: relative;
    &:hover .HoverStar{
        opacity:100;
    }
    `
const HoverStar = styled.div`
    opacity: 0;
    transition: all 0.3s ease;
`
