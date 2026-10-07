import React, { useEffect, useState } from 'react';
import { YOUTUBE_API_URL } from '../utils/contant';
import VideoCard from './VideoCard';

const VideoContainer = () => {
  const [videos ,setvideos] =useState([])
  const getVideos = async () => {

      const response = await fetch(YOUTUBE_API_URL);
      const json = await response.json();

      

      console.log(json.items);
      setvideos(json.items)
     
    
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className=' flex flex-wrap cursor-pointer hover:bg-gray-100'> 
      {videos.map(video=>  <VideoCard key={video.id} info ={video}/>)}
     
    </div>
  );
};

export default VideoContainer;
