import styled from 'styled-components'
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom'
import Favoritos from '../components/favoritos'
export default function Mapa() {

    return (

        <>
            <BombWrapper>
                <ImgFundo></ImgFundo>
                <Textos>
                    <Link to="/">
                        <P><ChevronLeft /> todos os mapas</P>
                    </Link>
                    <Titulo>fracture</Titulo>
                </Textos>

                <Bombs>

                    <Bomb>
                        <P>bomb A</P>
                        <DivImg>

                            <div>
                                <PixelImg src="https://ik.imagekit.io/viperpixels/pixels/Haven/bomb_A/pixel_2/jeito_1/resultado.png?updatedAt=1676859331206" alt="" />
                                <HoverStar className='HoverStar'>
                                    <Favoritos />
                                </HoverStar>
                            </div>
                        </DivImg>
                    </Bomb>
                    <Bomb>
                        <P>bomb B</P>
                        <DivImg>

                            <div>
                                <PixelImg src="https://ik.imagekit.io/viperpixels/pixels/Haven/bomb_C/pixel_2/resultado.png?updatedAt=1676431214511" alt="" />
                                <HoverStar className='HoverStar'>
                                    <Favoritos />
                                </HoverStar>
                            </div>

                        </DivImg>
                    </Bomb>
                </Bombs>
            </BombWrapper >
        </>

    )

}
const ImgFundo = styled.div`
    background: linear-gradient(to top, rgba(14, 15, 16, 1) 65%, rgba(14, 15, 16, 0.5)) 65%, url('https://cms.upcomer.com/wp-content/uploads/2023/03/bind11.jpg');
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    z-index: -2;
    top: 0;
`
const BombWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

const PixelImg = styled.img`
    width: 15rem;
    height: 15rem;
    object-fit: cover;
`
const Bomb = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    `
const Bombs = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`
const Titulo = styled.h2`
    font-size: 24px;
    color: aliceblue;
    font-weight: 400px;
    padding-top: 2rem;
    `
const P = styled.p`
    color: aliceblue;
    font-size: 14px;
    align-items: center;
    padding-top: 2rem;
`
const Textos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const DivImg = styled.div`
    position: relative;
    display: flex;
    gap: 2rem;
    &:hover .HoverStar{
        opacity:100;
    }
    `
const HoverStar = styled.div`
    opacity: 0;
    transition: all 0.3s ease;
`
