import Image from 'next/image'
import { Inter } from 'next/font/google'
import Titulo from '@/components/Titulo'
import CardFilme from '@/components/CardFilme'
import SecaoFilmes from '@/components/SecaoFilmes'
import MovieCreationIcon from '@mui/icons-material/MovieCreation';

/*Base de dados para os filmes https://www.themoviedb.org/?language=pt*/

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const filmes = [
    {
      titulo: "Super Mario Bros.: O Filme",
      nota: "9.0",
      descricao: "O melhor filme de Video Game da história",
      poster: "https://www.themoviedb.org/t/p/original/wF8LNx3YymMhkHRE73wtJKuX4ii.jpg"
    },
    {
      titulo: "A Mãe",
      nota: "6.0",
      descricao: "Um filme mediano",
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/nJpwHsC5bo5NEkx5gULWA9hAZin.jpg"
    }
  ]

  return (
    <>
      <header>
        <div>
          <MovieCreationIcon/>
          <h1>Senac Filmes</h1>
        </div>
        <h1>Sobre</h1>
        <div>
          <img className='h-72 w-screen object-cover' src='https://www.themoviedb.org/t/p/original/fgw4rFs4XMWdJTWp1eMacHKQqbZ.jpg' />
        </div>
      </header>
      <main className={`flex min-h-screen flex-col justify-between p-24 ${inter.className}`}/*Classes do TailWind*/>
        <Titulo>Filmes em Alta</Titulo>
        <div className='flex'>
          <SecaoFilmes filmes={filmes} />
        </div>
        <Titulo>Séries em Alta</Titulo>
        <Titulo>Lançamentos</Titulo>
        <Titulo>Melhores do Mês</Titulo>
      </main> //JSX Parece HTML mas não é
    </>
  )
}
