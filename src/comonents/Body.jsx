// comonents/Body.jsx
import React from 'react';
import SideBar from './SideBar';
// import MainContainer from './MainContainer';
import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
    <div className="flex pt-14"> {/* pt-14 pushes content under fixed header */}
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;