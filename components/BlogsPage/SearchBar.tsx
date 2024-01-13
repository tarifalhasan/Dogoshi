import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className="flex rounded-full bg-black/10 border border-black/5 items-center px-7 py-5 gap-3">
      <IoSearch className=" w-6 h-6 text-black" />
      <input
        placeholder="Search News"
        className="  text-lg border-none  bg-transparent focus:outline-none outline-none flex-1 font-medium text-black"
      />
    </div>
  );
};

export default SearchBar;
