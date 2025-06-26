import axios from "axios";
import BookCard from "../components/BookCard";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
const BookList = () => {
  const [books, setbooks] = useState([]);
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/api/book`)
      .then((res) => {
        setbooks(res.data);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
        // console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const filterbook =
    filter === "All" ? books : books.filter((book) => book.category === filter);

  // console.log(filterbook);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-5xl font-bold text-center my-8">book Catalogue</h1>
      <div className=" max-w-4xl mx-auto ">
        <h1 className="text-xl font-bold mb-4 text-center">
          Filter by Category
        </h1>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="mb-6 p-2 rounded-md shadow-md w-full border-2 border-indigo-500 outline-none"
        >
          <option value="All">All</option>
          <option value="Programming">Programming</option>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Design">Design</option>
          <option value="Web Development">Web Development</option>
          <option value="Backend">Backend</option>
          <option value="CSS Frameworks">CSS Frameworks</option>
          <option value="Full Stack">Full Stack</option>
        </select>
      </div>

      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filterbook.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BookList;
