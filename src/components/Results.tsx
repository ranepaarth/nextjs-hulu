import { GenreResult } from '@/app/page';
import React from 'react';
import Thumbnail from './Thumbnail';

function Results({ results }: { results: GenreResult[] }) {
  return (
    <main className='3xl:grid-cols-4 my-4 px-5 sm:grid sm:px-0 md:grid-cols-2 md:gap-8 xl:grid-cols-3'>
      {results.map(result => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </main>
  );
}

export default Results;
