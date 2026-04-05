import Link from 'next/link';

export default function Header() {
    return (
        <header style={{ padding: '1rem', backgroundColor: '#EF5350', color: 'white', textAlign: 'center' }}>
            <h1>
                <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>
                    PokeExplorer
                </Link>
            </h1>
        </header>
    );
}