import PokemonCard from '@/components/PokemonCard';

async function getPokemons() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');

  if (!res.ok) {
    throw new Error('Falha ao buscar os dados da PokéAPI');
  }

  return res.json();
}

export default async function Home() {
  const data = await getPokemons();
  const pokemons = data.results;

  return (
<div className="animate-fade-in">
      <h2 style={{ textAlign: 'center', color: '#EF5350', marginBottom: '2rem', fontSize: '2rem' }}>
        Catálogo de Pokémon
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        gap: '2rem'
      }}>
        {pokemons.map((pokemon: { name: string; url: string }) => (
          <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
        ))}
      </div>
    </div>
  );
}