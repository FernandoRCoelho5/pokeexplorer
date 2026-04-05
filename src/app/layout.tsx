import './globals.css'
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'PokeExplorer',
  description: 'Catálogo interativo de Pokémon',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0, fontFamily: 'sans-serif' }}>
        <Header />
        <main style={{ minHeight: '80vh', padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}