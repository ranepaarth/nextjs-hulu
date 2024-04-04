import {
  BoltIcon,
  CheckBadgeIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  RectangleStackIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import React from 'react';
import HeaderItem from './HeaderItem';

function Header() {
  return (
    <header className='flex flex-col items-center space-y-2 text-neutral-300 sm:flex-row sm:items-end sm:justify-between sm:gap-x-6 md:gap-x-16'>
      <div className='flex w-full max-w-xl flex-grow items-center justify-between'>
        <HeaderItem title={'HOME'} Icon={HomeIcon} />
        <HeaderItem title={'TRENDING'} Icon={BoltIcon} />
        <HeaderItem title={'VERIFIED'} Icon={CheckBadgeIcon} />
        <HeaderItem title={'COLLECTION'} Icon={RectangleStackIcon} />
        <HeaderItem title={'SEARCH'} Icon={MagnifyingGlassIcon} />
        <HeaderItem title={'ACCOUNT'} Icon={UserIcon} />
      </div>
      <div className=' text-5xl font-extrabold text-neutral-200'>hulu</div>
    </header>
  );
}

export default Header;
