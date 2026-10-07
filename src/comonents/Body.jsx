// comonents/Body.jsx
import React from 'react';
import SideBar from './SideBar';
import MainContainer from './MainContainer';

const Body = () => {
  return (
    <div className="flex pt-14"> {/* pt-14 pushes content under fixed header */}
      <SideBar />
      <MainContainer />
    </div>
  );
};

export default Body;