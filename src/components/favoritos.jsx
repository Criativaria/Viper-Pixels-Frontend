import { Star } from 'lucide-react';
import styled from 'styled-components';
import StarComplete from '../assets/Frame.svg'
import { useState } from 'react';
import { Link } from 'react-router-dom'

export default function Favoritos() {

    const [favorito, setFavorito] = useState(true);

    function Favoritou() {

        console.log("funcionou!")
        setFavorito(!favorito)


    }

    return (
        <DivStar onClick={Favoritou}>
            < Link to="/login" >
                {favorito ? <Star size={40} /> : <img src={StarComplete} />}
            </Link >
        </DivStar>
    )

}


const DivStar = styled.div`
    position: absolute;
    color: #000000;
    height: 2.5rem;
    bottom: 0;
    right: 0;
    .apareceu{
        display: flex;
    }
    .desapareceu{
        display: flex;
    }
`