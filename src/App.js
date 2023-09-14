import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImages from "./api";

function App() {
  const [Images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList imgs={Images} />
    </div>
  );
}

export default App;
