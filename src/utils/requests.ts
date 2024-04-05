const API_KEY: string = process.env.API_KEY!;

export interface Genre {
  segment: string;
  title: string;
  url: string;
}
export const genres: Genre[] = [
  {
    segment: 'fetchTrending',
    title: 'trending',
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  {
    segment: 'fetchTopRated',
    title: 'top rated',
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  {
    segment: 'fetchActionMovies',
    title: 'action',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  {
    segment: 'fetchComedyMovies',
    title: 'comedy',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  {
    segment: 'fetchHorrorMovies',
    title: 'horror',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  {
    segment: 'fetchRomanceMovies',
    title: 'romance',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  {
    segment: 'fetchMystery',
    title: 'mystery',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  },
  {
    segment: 'fetchSciFi',
    title: 'sci-fi',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  },
  {
    segment: 'fetchWestern',
    title: 'Western',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  },
  {
    segment: 'fetchAnimation',
    title: 'animation',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  },
  {
    segment: 'fetchTV',
    title: 'TV movies',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
  },
];
