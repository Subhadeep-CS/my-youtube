import MainContainer from "../component/MainContainer";
import Sidebar from "../component/Sidebar";

const Home: React.FC = () => {
  return (
    <div className="grid grid-flow-col">
      <Sidebar />
      <MainContainer />
    </div>
  );
};

export default Home;
