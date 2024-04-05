import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Results from '@/components/Results';

export default function Home() {
  return (
    <main className='py-4'>
      <div className='container'>
        <Header />
        <Navbar />
        <Results />
      </div>
    </main>
  );
}
