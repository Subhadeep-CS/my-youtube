import { AlignJustify, CircleUserRound } from "lucide-react";
import Logo from "../assets/images/youtube_logo.png";
import { toggleSideBarMenu } from "../redux/slices/globalSlice";
import { useDispatch } from "react-redux";
const Header: React.FC = () => {
  const dispatch = useDispatch();
  const toggleMenu = () => {
    dispatch(toggleSideBarMenu());
  };
  return (
    <div className="grid grid-flow-col p-2 shadow-lg items-center">
      <div className="col-span-1 flex justify-center items-center">
        <AlignJustify className="cursor-pointer" onClick={toggleMenu} />
        <img src={Logo} alt="youtube-logo" className="h-14 cursor-pointer" />
      </div>
      <div className="col-span-10 text-center">
        <input
          type="text"
          placeholder="Search"
          className="w-1/2 p-2 rounded-l-full outline-gray-300 border border-gray-400"
        />
        <button className="rounded-r-full py-2 px-4 bg-gray-100 border border-gray-400">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <CircleUserRound size={"40"} />
      </div>
    </div>
  );
};

export default Header;
