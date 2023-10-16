import styled from 'styled-components'
import Favoritos from '../components/favoritos'

export default function Suaconta() {

    return (
        <>
            <Titulo>pixels favoritos</Titulo>

            <FavoritosWrapper>

                <MapasWrapper>
                    <P>mapas</P>
                    <Mapas>
                        <Imgdiv>
                            <Pimg>Ascent</Pimg>
                            <ImgMapa src="https://ik.imagekit.io/viperpixels/pixels/ascent/TelaDeCarregamentoPrincipal.png?updatedAt=1676429585476" alt="mapa" />
                            <HoverStar className='HoverStar'>
                                <Favoritos />
                            </HoverStar>
                        </Imgdiv>
                    </Mapas>
                </MapasWrapper>
                <PixelsWrapper>
                    <P>pixels</P>
                    <Pixels>
                        <LinkMapa href="#">
                            <ImgPixel src="https://ik.imagekit.io/viperpixels/pixels/ascent/bomb-b/pixel-3/pixelParedeMercadoECt-resultado__2_.png?updatedAt=1676429707074" alt="pixel" />
                            <HoverStar className='HoverStar'>
                                <Favoritos />
                            </HoverStar>
                        </LinkMapa>


                    </Pixels>
                </PixelsWrapper>
            </FavoritosWrapper>

        </>
    )

}

const FavoritosWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding-inline: 18rem;
    margin-top: 2rem;
`
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
    font-size: 14px;
`


const ImgMapa = styled.img`
    width: 15rem;
`
const MapasWrapper = styled.div`
    width : 15rem;
`
const Mapas = styled.div`
    margin-top: 1rem;
`
const Imgdiv = styled.div`
    width: 15rem;
    height: 2.5rem;
    overflow: hidden;

    position: relative;
    &:hover .HoverStar{
        opacity:100;
    }
    `
const Pimg = styled.p`
    position: absolute;
    padding-left: 1rem;
    padding-top: 0.5rem;
    color: aliceblue;
`

const ImgPixel = styled.img`
   width : 13rem;
   height: 13rem;
`
const PixelsWrapper = styled.div`
    margin-left: 1rem;
`
const Pixels = styled.div`
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    margin-top: 1rem;
`
const LinkMapa = styled.a`
    position: relative;
    &:hover .HoverStar{
        opacity:100;
    }
    `
const HoverStar = styled.div`
    opacity: 0;
    transition: all 0.3s ease;
`