export const metadata = {
  title: 'Sobre - PokeExplorer',
  description: 'Informações sobre o projeto e o desenvolvedor',
};

export default function Sobre() {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
      <h1 style={{ color: '#EF5350', borderBottom: '2px solid #EF5350', paddingBottom: '0.5rem' }}>
        Sobre o PokeExplorer
      </h1>
      <p style={{ fontSize: '1.1rem', color: '#444' }}>
        O <strong>PokeExplorer</strong> é um catálogo interativo web desenvolvido como trabalho prático da disciplina de Programação e Design para Web II. O objetivo da aplicação é consumir a <strong>PokéAPI</strong> pública para exibir uma listagem de Pokémon e seus detalhes específicos, demonstrando o uso prático de rotas e consumo de APIs no Next.js.
      </p>

      <h2 style={{ marginTop: '2rem', color: '#333' }}>Dados do Desenvolvedor</h2>
      <ul style={{ listStyleType: 'none', padding: 0, fontSize: '1.1rem', color: '#444' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>Nome:</strong> Fernando Ramos Coelho</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Curso:</strong> Sistemas para Internet </li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Instituição:</strong> FAETERJ - Unidade Barra Mansa </li>
      </ul>
    </div>
  );
}