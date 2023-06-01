import CardFilme from "@/components/CardFilme";
import Header from "@/components/Header";
import SecaoFilmes from "@/components/SecaoFilmes";
import Titulo from "@/components/Titulo";

export default function Home() {

  const filmes = [
    {
      titulo: "Super mario",
      nota: "8.9",
      poster: "https://www.themoviedb.org/t/p/w220_and_h330_face/kzYbNJ4JaQiRny0cDi8a6bNX5w3.jpg"
    },
    {
      titulo: "Super mario",
      nota: "8.9",
      poster: "https://www.themoviedb.org/t/p/w220_and_h330_face/kzYbNJ4JaQiRny0cDi8a6bNX5w3.jpg"
    },
    {
      titulo: "Super mario",
      nota: "8.9",
      poster: "https://www.themoviedb.org/t/p/w220_and_h330_face/kzYbNJ4JaQiRny0cDi8a6bNX5w3.jpg"
    },
    {
      titulo: "Super mario",
      nota: "8.9",
      poster: "https://www.themoviedb.org/t/p/w220_and_h330_face/kzYbNJ4JaQiRny0cDi8a6bNX5w3.jpg"
    },
    {
      titulo: "A mãe",
      nota: "6.7",
      poster: "https://www.themoviedb.org/t/p/w220_and_h330_face/5OeWHBMifiRPMz6eS23miS5ttED.jpg"
    }
  ]

  return (
    <> 
      <Header />
      <div>
        <img className="h-72 brightness-50 object-cover w-screen" src="https://www.themoviedb.org/t/p/original/cSWkX0fTjrBCU2sbEmyRFd1SxPA.jpg" />
      </div>
      
      <main className="flex min-h-screen flex-col px-24">
        <Titulo>Filmes em alta</Titulo>

        <SecaoFilmes filmes={filmes} />

        <Titulo>Melhores dramas</Titulo>
        <Titulo>Séries em alta</Titulo>
        <Titulo>Lançamentos</Titulo>


      </main> //JSX
    </>

  )
}
