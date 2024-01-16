import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";

const UNSPASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

function App() {
  const [word, setWord] = useState("");
  const [images, setImages] = useState([]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    fetch(
      `https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPASH_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages([data, ...images]);
        console.log(images);
      })
      .catch((err) => {
        console.log(err);
      });
    setWord("");
  };

  return (
    <div>
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
    </div>
  );
}

export default App;
