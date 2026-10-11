import React, { useEffect, useState } from 'react';
import { YOUTUBE_API_URL } from '../utils/contant';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';

const VideoContainer = () => {
  // Initialize state as null so the Shimmer triggers on first load
  const [videos, setvideos] = useState(null);

  const getVideos = async () => {
    try {
      const response = await fetch(YOUTUBE_API_URL);
      const json = await response.json();
      
      // Fallback to empty array if items are undefined
      setvideos(json?.items || []);
    } catch (error) {
      console.error("Failed to fetch videos:", error);
      setvideos([]);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  
  if (videos === null) {
    return <Shimmer />;
  }

  return (
    <div className='flex flex-wrap cursor-pointer gap-4 p-4'> 
      {videos.map((video) => ( 

        <Link to={"watch?v=" + video.id} key={video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;