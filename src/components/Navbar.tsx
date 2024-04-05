'use client';
import { Genre, genres } from '@/utils/requests';
import { useRouter } from 'next/navigation';
import React from 'react';

function Navbar() {
  const router = useRouter();

  const handleClickGenre = (genre: string) => {
    router.push(`/?genre=${genre}`);
  };
  return (
    <nav className='relative my-10'>
      <div className='absolute left-0 top-0 h-10 w-12 bg-gradient-to-r from-sky-950'></div>
      <div className='scrollbar-hide flex items-center overflow-x-scroll whitespace-nowrap text-sm md:text-base xl:justify-evenly'>
        {genres.map((genre: Genre) => {
          return (
            <h2
              className='cursor-pointer text-nowrap px-6 capitalize text-neutral-300 transition duration-100 hover:scale-125 hover:font-semibold hover:text-white active:text-red-500 xl:pr-0 xl:first:pl-0 xl:last:pr-0'
              key={genre.title}
              onClick={() => handleClickGenre(genre.segment)}
            >
              {genre.title}
            </h2>
          );
        })}
      </div>
      <div className='absolute right-0 top-0 h-10 w-10 bg-gradient-to-l from-sky-950'></div>
    </nav>
  );
}

export default Navbar;
