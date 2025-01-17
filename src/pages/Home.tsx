import { useSelector } from "react-redux";
import MainContainer from "../component/MainContainer";
import Sidebar from "../component/Sidebar";
import { RootState } from "../redux/store/store";
const Home: React.FC = () => {
  const isSideBarOpen: boolean = useSelector(
    (state: RootState) => state.global.isSideBarOpen
  );
  return (
    <div className="w-full grid grid-flow-col">
      {isSideBarOpen && <Sidebar />}
      <MainContainer />
    </div>
  );
};

export default Home;
