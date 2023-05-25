import { useState } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function CardFilme({ filme }) {

    const [favorito, setFavorito] = useState(false)

    return (
        <div className='flex flex-col p-2 m-4 w-56'>
            <div className="relative">
                <FavoriteIcon className="absolute right-2 top-2" />
                <FavoriteBorderIcon className="absolute right-2 top-2" />
                <img className='rounded-lg' src={filme.poster} />
            </div>
            <h4 className='text-xl w-fit my-2 line-clamp-1'>{filme.titulo}</h4>
            <span className='text-sm py-4'>{filme.descricao}</span>
            <span className='text-center text-lg'>⭐ {filme.nota}</span>
            <a className='bg-cyan-600 text-center py-2 rounded-lg bg-amber-900 text-gray-300' href='#'>Detalhes</a>
        </div>
    )
}