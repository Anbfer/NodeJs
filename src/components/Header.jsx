import SlideshowIcon from '@mui/icons-material/Slideshow';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="flex justify-between items-center w-100 bg-slate-800">

            <Link href='/' className="flex items-center m-4 text-amber-400">
                <SlideshowIcon className="text-4xl" />
                <h1 className="text-4xl">Senac Filmes</h1>
            </Link>

            <Link className="m-4 hover:text-amber-400" href="/sobre">sobre</Link>
        </header>
    )
}