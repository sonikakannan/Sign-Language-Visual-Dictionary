import React, { useState } from "react";
import { useDeleteWordMutation, useGetWordByQueryQuery } from "../features/api/wordApi";
import AddWordDialog from "../components/AddWordDialog";
import WordCard from "../components/WordCard";
import SearchBar from "../components/SearchBar";
import { toast } from "react-toastify";

const Home = () => {
  const [search, setSearch] = useState("");
  const [triggerSearch, setTriggerSearch] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const {
    data: wordData,
    isLoading,
    isError,
  } = useGetWordByQueryQuery(search, {
    skip: !triggerSearch || !search,
  });

  const [deleteWord] = useDeleteWordMutation();

  const handleDelete = async () => {
    if (!wordData?._id) return;
    if (window.confirm("Are you sure you want to delete this word?")) {
      try {
        await deleteWord(wordData._id).unwrap();
        toast.success("Word deleted successfully");
        setSearch("");
        setTriggerSearch(false);
      } catch {
        toast.error("Failed to delete word");
      }
    }
  };

  const handleSearch = () => {
    if (search.trim()) setTriggerSearch(true);
  };

  const handleAddSuccess = () => setTriggerSearch(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex flex-col items-center pt-16 px-4">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8">
        Welcome to the <span className="text-purple-600">Sign Language</span> Visual Dictionary!
      </h1>
      <SearchBar
        search={search}
        setSearch={setSearch}
        onSearch={handleSearch}
        onAdd={() => setOpenDialog(true)}
      />
      <AddWordDialog
        open={openDialog}
        handleClose={() => setOpenDialog(false)}
        onSuccess={handleAddSuccess}
      />
      <p className="mt-6 text-center text-gray-700 max-w-2xl text-sm sm:text-base">
        This mini dictionary helps you explore and learn sign language easily.
        Search for a word to view its definition, an image, and a video.
      </p>
      <div className="mt-10">
        {isLoading && (
          <div className="flex justify-center mt-10">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-purple-600"></div>
          </div>
        )}
        {isError && (
          <p className="text-red-500 text-center">
            Word not found or server error.
          </p>
        )}
        {wordData && (
          <WordCard wordData={wordData} onDelete={handleDelete} />
        )}
      </div>
    </div>
  );
};

export default Home;