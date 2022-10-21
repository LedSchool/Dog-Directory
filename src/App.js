import React, { useEffect, useState } from "react";
import placeholderImg from "./images/undraw_relaxing_walk.svg";

function App() {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectBreed] = useState("");
  

  useEffect(()=>{
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(res=> res.json())
    .then(res=> {
      setBreeds(Object.keys(res.message))
    })
  },[])

  return (
    <div className="d-flex justify-content-center flex-column text-center">
      <header>
        <h1 className="mt-4 mb-5">Doggy Directory 🐶</h1>
      </header>
      <main role="main">
        <div className="d-flex justify-content-center">
          <select
            className="form-select w-25"
            aria-label="Select a breed of dog to display results"
            value={selectedBreed}
            onChange={(e)=> setSelectBreed(e.target.value)}
            >
              <option value="">Select a breed</option>
              {breeds.map(breed=>(
                <option key={breed} value={breed}>{breed}</option>
              ))}
          </select>
          <button 
            className="btn btn-info mx-2"
            disabled={!selectedBreed}
            >
            Search
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
