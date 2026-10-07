import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';


const Head = () => {
  const dispatch =useDispatch()

const toggleMenuHandler = ()=>{
  dispatch(toggleMenu())

}




  return (
    <div className='flex justify-between items-center px-4 py-2 '>
      
      <div className='flex items-center gap-4 min-w-[200px]'>
        <button className='p-2 hover:bg-gray-100 rounded-full transition-colors'>
          <GiHamburgerMenu className='text-xl cursor-pointer'onClick={()=>toggleMenuHandler()}/>
        </button >
        <img className='h-15 object-contain cursor-pointer' 
        src="data:image/png;base64,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" alt="logo" />
      </div>
      
      {/* Center: Search Bar */}
      <div className='flex items-center justify-center flex-1 max-w-300px mx-4'>
        <input 
          className='border border-gray-300 w-120 h-11 px-4 py-2 rounded-l-full focus:outline-none focus:border-blue-200' 
          type="text" 
          placeholder="Search" 
        />
        <button className='h-11 px-5 bg-gray-100 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-200 flex items-center justify-center'>
          <IoIosSearch className='text-xl text-gray-600' />
        </button>
      </div>

      {/* Right: User Profile */}
      <div className='flex items-center justify-end min-w-200px'>
        <button className='text-2xl text-gray-700 hover:text-black'>
          <FaUserCircle />
        </button>
      </div>
    </div>
  );
};

export default Head;