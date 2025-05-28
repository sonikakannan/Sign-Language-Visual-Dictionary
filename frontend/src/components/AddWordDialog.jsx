import React, { useState } from "react";
import { useCreateWordMutation } from "../features/api/wordApi";
import { toast } from "react-toastify";

const AddWordDialog = ({ open, handleClose, onSuccess }) => {
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [createWord] = useCreateWordMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const payload = { word, definition, imageUrl, videoUrl };

    try {
      await createWord(payload).unwrap();
      toast.success("Word added successfully!");
      onSuccess(payload);
      handleClose();
    } catch (error) {
      toast.error("Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-96"
      >
        <h2 className="text-xl font-bold mb-4">Add New Word</h2>
        <input
          type="text"
          placeholder="Word"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          required
          className="w-full border p-2 mb-3 rounded"
        />
        <textarea
          placeholder="Definition"
          value={definition}
          onChange={(e) => setDefinition(e.target.value)}
          className="w-full border p-2 mb-3 rounded"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="w-full border p-2 mb-3 rounded"
        />
        <input
          type="text"
          placeholder="Video URL"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          className="w-full border p-2 mb-3 rounded"
        />
        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={handleClose}
            className="px-4 py-2 bg-gray-300 rounded"
            disabled={isLoading}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-purple-600 text-white rounded flex items-center justify-center cursor-pointer"
            disabled={isLoading}
          >
            {isLoading ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
                />
              </svg>
            ) : (
              "Save"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddWordDialog;
