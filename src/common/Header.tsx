import { AlignJustify, CircleUserRound } from "lucide-react";
import Logo from "../assets/images/youtube_logo.png";
import { toggleSideBarMenu } from "../redux/slices/globalSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_SUGGESTION_API } from "../utils/constant";
const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchSuggestion, setSearchSuggestion] = useState<string[]>([]);
  const dispatch = useDispatch();
  const toggleMenu = () => {
    dispatch(toggleSideBarMenu());
  };

  const getSearchSuggestions = async (): Promise<void> => {
    try {
      const response: Response = await fetch(
        YOUTUBE_SEARCH_SUGGESTION_API + searchQuery
      );
      const data: string[] = await response.json();
      if (Array.isArray(data[1])) {
        setSearchSuggestion(data[1]);
      }
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestions(), 200);
    return () => clearTimeout(timer);
  }, [searchQuery]);
  return (
    <div className="grid grid-cols-12 p-4 shadow-lg items-center bg-white">
      {/* Logo and Menu */}
      <div className="col-span-2 flex items-center space-x-4">
        <AlignJustify className="cursor-pointer text-xl" onClick={toggleMenu} />
        <img src={Logo} alt="youtube-logo" className="h-12 cursor-pointer" />
      </div>

      {/* Search Bar */}
      <div className="col-span-8">
        <div className="relative flex items-center justify-center">
          <input
            type="text"
            placeholder="Search"
            className="w-full max-w-2xl p-2 rounded-l-full outline-gray-300 border border-gray-400"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="rounded-r-full py-2 px-4 bg-gray-100 border border-gray-400">
            🔍
          </button>
          {/* Suggestions Dropdown */}
          {searchSuggestion.length > 0 && (
            <div className="absolute top-12 bg-white shadow-md w-full max-w-2xl z-10 rounded-lg">
              <ul className="divide-y divide-gray-200">
                {searchSuggestion.map((searchResult, index) => (
                  <li
                    key={index}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {searchResult}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* User Icon */}
      <div className="col-span-2 flex justify-center items-center">
        <CircleUserRound size={40} />
      </div>
    </div>
  );
};

export default Header;
