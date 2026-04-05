import Link from 'next/link';
import Image from 'next/image';

export default function PokemonCard({ name, url }: { name: string, url: string }) {
    const id = url.split('/').filter(Boolean).pop();
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

    return (
        <Link href={`/pokemon/${name}`} style={{ textDecoration: 'none' }}>
            <div className="pokemon-card">
                <Image
                    src={imageUrl}
                    alt={name}
                    width={150}
                    height={150}
                    style={{ objectFit: 'contain', filter: 'drop-shadow(0px 10px 8px rgba(0,0,0,0.1))' }}
                />
                <h3 className="pokemon-title">{name}</h3>
            </div>
        </Link>
    );
}