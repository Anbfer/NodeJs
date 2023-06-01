import Header from "@/components/Header";

export default function Sobre(){
    return (
        <>
            <Header />
            <div className="flex flex-col items-center">
                <h1 className="text-4xl font-bold mt-4">Sobre o Senac Filmes</h1>
                <p className="text-2xl mt-4">Sistema realizado para estudos de React no Senac, melhor turma de ADS</p>
            </div>
        </>
    )
}