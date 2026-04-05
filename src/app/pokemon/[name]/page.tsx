import Link from 'next/link';
import Image from 'next/image';

async function getPokemonDetails(name: string) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

    if (!res.ok) {
        throw new Error('Falha ao buscar os detalhes do Pokémon');
    }

    return res.json();
}

export default async function PokemonDetails({ params }: { params: Promise<{ name: string }> }) {
    const resolvedParams = await params;
    const pokemon = await getPokemonDetails(resolvedParams.name);

    const imageUrl = pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default;

    return (
        <div className="details-container animate-fade-in">
            
            <Link href="/" className="btn-voltar">
                &larr; Voltar para o catálogo
            </Link>

            <div style={{ textAlign: 'center' }}>
                <h2 className="pokemon-title" style={{ fontSize: '2.5rem', margin: '0 0 1rem 0' }}>
                    {pokemon.name}
                </h2>
                <Image
                    src={imageUrl}
                    alt={pokemon.name}
                    width={250}
                    height={250}
                    style={{ objectFit: 'contain', filter: 'drop-shadow(0px 10px 15px rgba(0,0,0,0.15))' }}
                />
            </div>

            <div style={{ backgroundColor: '#f8f9fa', padding: '2rem', borderRadius: '16px', marginTop: '2rem' }}>
                <h3 style={{ color: '#2c3e50', borderBottom: '2px solid #e0e0e0', paddingBottom: '0.75rem', marginBottom: '1.5rem', fontSize: '1.5rem' }}>
                    Estatísticas
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                    <div style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
                        <span style={{ display: 'block', color: '#7f8c8d', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Altura</span>
                        <strong style={{ fontSize: '1.2rem', color: '#2c3e50' }}>{pokemon.height / 10} m</strong>
                    </div>
                    <div style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
                        <span style={{ display: 'block', color: '#7f8c8d', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Peso</span>
                        <strong style={{ fontSize: '1.2rem', color: '#2c3e50' }}>{pokemon.weight / 10} kg</strong>
                    </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                    <span style={{ display: 'block', color: '#7f8c8d', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Tipo(s)</span>
                    <div>
                        {pokemon.types.map((t: { type: { name: string } }) => (
                            <span key={t.type.name} className="badge">
                                {t.type.name}
                            </span>
                        ))}
                    </div>
                </div>

                <div>
                    <span style={{ display: 'block', color: '#7f8c8d', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Habilidades</span>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                        {/* Estilização limpa para as habilidades (como se fossem tags secundárias) */}
                        {pokemon.abilities.slice(0, 3).map((a: { ability: { name: string } }) => (
                            <span key={a.ability.name} style={{ backgroundColor: '#fff', padding: '6px 16px', borderRadius: '8px', border: '1px solid #e0e0e0', color: '#444', textTransform: 'capitalize', fontSize: '0.9rem' }}>
                                {a.ability.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}