import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const WordCard = ({ wordData, onDelete }) => {
  if (!wordData) return null;
  return (
    <div className="bg-white p-4 rounded shadow-md text-center relative">
      <div
        className="absolute top-2 right-2 text-red-600 cursor-pointer"
        onClick={onDelete}
      >
        <FaRegTrashAlt />
      </div>
      <h2 className="text-xl font-semibold text-purple-700 mb-2">
        {wordData.word}
      </h2>
      <p className="text-gray-600 mb-4">{wordData.definition}</p>
      {wordData.imageUrl && (
        <img
          src={wordData.imageUrl}
          alt={wordData.word}
          className="w-48 mx-auto mb-4"
        />
      )}
      {wordData.videoUrl && (
        <video controls className="mx-auto w-64">
          <source src={wordData.videoUrl} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default WordCard;