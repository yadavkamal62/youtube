import React from 'react';
import { AiFillHome } from "react-icons/ai";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const SideBar = () => {
  //early return
  const isMenuOpen  =useSelector((store) => store.app.isMenuOpen);
  if(!isMenuOpen)return null;
  return (
    <div className='px-3 w-56 h-screen bg-white'>
      {/* Home */}
      <Link to="/" className='flex items-center gap-4 px-3 my-2 cursor-pointer bg-gray-100 hover:bg-gray-200 w-full rounded-lg h-10 transition-colors text-inherit no-underline'>
        <AiFillHome className='text-xl shrink-0' />
        <h1 className='font-bold text-sm whitespace-nowrap'>Home</h1>
      </Link>

      {/* Shorts */}
      <div className='flex items-center gap-4 px-3 my-2 cursor-pointer hover:bg-gray-100 w-full rounded-lg h-10 transition-colors'>
        <SiYoutubeshorts className='text-xl shrink-0' />
        <h1 className='text-sm whitespace-nowrap'>Shorts</h1>
      </div>

      {/* Subscription */}
      <div className='flex items-center gap-4 px-3 my-2 cursor-pointer hover:bg-gray-100 w-full rounded-lg h-10 transition-colors'>
        <MdSubscriptions className='text-xl shrink-0' />
        <h1 className='text-sm whitespace-nowrap'>Subscriptions</h1>
      </div>
    </div>
  );
};

export default SideBar;