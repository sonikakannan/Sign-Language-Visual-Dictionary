import React from "react";
import { IoSearch } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";

const SearchBar = ({ search, setSearch, onSearch, onAdd }) => (
  <div className="flex items-center gap-3">
    <div className="flex items-center border border-gray-400 bg-white rounded-full shadow-lg p-3 w-full max-w-md">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search a word..."
        className="outline-none w-full px-3 bg-transparent text-gray-700 placeholder-gray-500"
        onKeyDown={(e) => e.key === "Enter" && onSearch()}
      />
      <IoSearch
        onClick={onSearch}
        className="w-6 h-6 text-gray-500 cursor-pointer hover:text-purple-600"
      />
    </div>
    <div className="bg-purple-700 text-white p-2 rounded cursor-pointer">
      <FaPlus onClick={onAdd} />
    </div>
  </div>
);

export default SearchBar;