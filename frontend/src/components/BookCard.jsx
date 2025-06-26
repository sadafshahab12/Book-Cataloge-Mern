import React from "react";
import { useNavigate } from "react-router-dom";

const BookCard = ({ book }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-200">
      <div className="p-4 h-full">
        <p className="text-xs bg-indigo-100 text-indigo-800 inline px-3 py-1 rounded-full uppercase tracking-wide font-medium">
          {book.category}
        </p>

        <h1 className="text-xl font-bold mt-3 text-slate-800">{book.title}</h1>

        <p className="text-sm text-gray-500 mt-1">by {book.author}</p>

        <p className="text-lg text-violet-700 font-semibold mt-2">
          ${book.price}
        </p>

        <p className="text-sm text-rose-400 mt-1 italic">
          Published: {book.published}
        </p>

        <button className="mt-4 w-full bg-emerald-500 text-white font-medium py-2 rounded-md hover:bg-emerald-400 transition-colors duration-300 cursor-pointer">
          Add to Cart
        </button>

        <button
          onClick={() => navigate(`/book-details/${book.id}`)}
          className="mt-3 w-full bg-indigo-500 text-white font-medium py-2 rounded-md hover:bg-indigo-400 transition-colors duration-300 cursor-pointer"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default BookCard;
