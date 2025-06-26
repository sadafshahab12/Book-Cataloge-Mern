import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookList from "./pages/BookList";

function App() {
  return (
    <BrowserRouter>
      <div className="font-jost">
        <Routes>
          <Route path="/" element={<BookList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
