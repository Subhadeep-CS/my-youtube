import HomeNavigation from "./HomeNavigation";
import VideoContainer from "./VideoContainer";

const MainContainer: React.FC = () => {
  return (
    <div className="col-span-11">
      <HomeNavigation />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
