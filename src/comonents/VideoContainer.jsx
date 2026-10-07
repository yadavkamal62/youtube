import React, { useEffect, useState } from 'react';
import { YOUTUBE_API_URL } from '../utils/contant';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

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
    <div className=' flex flex-wrap cursor-pointer '> 
      {videos.map(video=> ( 
        <Link to = {"watch?v="+video.id}>
          <VideoCard key={video.id} info ={video}/></Link>
      
      ))}
     
    </div>
  );
};

export default VideoContainer;
