import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";

import Searcher from "./components/Searcher";
import ImageList from "./components/ImageList";

function App() {

  const [search, setSearch] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const jumbotron = useRef(null);

  useEffect(() => {
    const consultAPI = async () => {
      const per_page = 30;
      const key = "14232166-22b4a3d158dfb8902f1af9215";
      const res = await axios.get("https://pixabay.com/api/", {
        params: {
          key,
          per_page,
          q: search,
          page
        }
      })

      setImages(res.data.hits);
      setTotalPages(Math.ceil(res.data.totalHits / res.data.hits.length));

      jumbotron.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      })

    }

    if (search === "") return;

    consultAPI();

  }, [search, page]);

  const previousPage = () => {
    const newPage = page - 1;
    setPage(newPage);
  }

  const nextPage = () => {
    const newPage = page + 1;
    setPage(newPage);
  }

  return (
    <div className="container">
      <div className="jumbotron" ref={jumbotron} >
        <p className="lead text-center">
          Searcher of Images
        </p>
        <Searcher setSearch={setSearch} />
      </div>

      <div className="row justify-content-center mb-5">
        <ImageList images={images} />
        {
          page > 1 && (
            <button onClick={previousPage} className="btn btn-info mr-1">
              &laquo; Previous
            </button>
          )
        }
        {
          page !== totalPages && (
            <button onClick={nextPage} className="btn btn-info">
              Next &raquo;
            </button>
          )
        }
      </div>

    </div>
  );
}

export default App;
