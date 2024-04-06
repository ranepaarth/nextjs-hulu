import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Results from '@/components/Results';
import { Genre, genres } from '@/utils/requests';

type SearchParamsProps = {
  readonly searchParams: {
    readonly genre: string;
  };
};

export interface GenreResult {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export default async function Home({ searchParams }: SearchParamsProps) {
  const { results } = await getResults(searchParams.genre);
  return (
    <main className='py-4'>
      <div className='container'>
        <Header />
        <Navbar />
        <Results results={results} />
      </div>
    </main>
  );
}


async function getResults(genreQuery: string) {
  const genre: Genre = genres.find(genre => genre.segment === genreQuery)!;
  const results = await fetch(
    `https://api.themoviedb.org/3/${genre?.url || genres[0].url}`,
  );
  const data = await results.json();
  return data;
}
