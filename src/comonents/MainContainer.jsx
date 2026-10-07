// comonents/MainContainer.jsx
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';


const MainContainer = () => {
 

  return (
    <div className="flex-1 overflow-x-hidden">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
