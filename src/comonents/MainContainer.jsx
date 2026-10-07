// comonents/MainContainer.jsx
import ButtonList from './ButtonList';
import Vediocontainer from './Vediocontainer';


const MainContainer = () => {
 

  return (
    <div className="flex-1 overflow-x-hidden">
      <ButtonList />
      <Vediocontainer />
    </div>
  );
};

export default MainContainer;
