import { GenreResult } from '@/app/page';
import { HandThumbUpIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import React from 'react';

function Thumbnail({result}:{result:GenreResult}) {
  const BASE_URL = 'https://image.tmdb.org/t/p/original';
  return (
    <article
      className='group transform transition duration-200 ease-in-out hover:z-50 sm:hover:scale-105'
    >
      <Image
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        alt={result.poster_path}
        height={1080}
        width={1920}
        className='mt-4 grow rounded-lg shadow-lg shadow-black/60 last:mb-4'
      />
      <div className='p-2 pt-4'>
        <p className='line-clamp-2 max-w-lg text-neutral-300 sm:text-sm'>
          {result.overview}
        </p>
        <h2 className='py-1 text-xl font-medium text-white transition-all duration-200 ease-in-out group-hover:font-extrabold'>
          {result.title || result.original_title}
        </h2>
        <div className='flex items-center gap-x-2 text-sm text-neutral-300 opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100'>
          <span>{result.release_date}</span>
          <span>•</span>
          <p className='flex items-center gap-x-1'>
            <HandThumbUpIcon className='h-5' />
            <span>{result.vote_count}</span>
          </p>
        </div>
      </div>
    </article>
  );
};

export default Thumbnail;
