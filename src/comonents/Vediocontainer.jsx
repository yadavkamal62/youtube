import React, { useEffect } from 'react';
import { YOUTUBE_API_URL } from '../utils/contant';

const Vediocontainer = () => {
  const getVideos = async () => {

      const response = await fetch(YOUTUBE_API_URL);
      const json = await response.json();

      

      console.log(json);
    
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div>
        vidio contaiener
    </div>
  );
};

export default Vediocontainer;
