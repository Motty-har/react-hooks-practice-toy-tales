import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then(resp => resp.json())
    .then(data => setToys(data))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }
  function handleDeleteToys(deleteToy){
    const updatedList = toys.filter(toy => {
      return toy.id !== deleteToy.id
    })
    setToys(updatedList)
  }
  function handleToyLike(updatedToy){
    const toyLiked = toys.map((toy)=>{
      return toy.id === updatedToy.id ? updatedToy : toy
    })
    setToys(toyLiked)
  }
  return (
    <>
      <Header />
      {showForm ? <ToyForm setToys={setToys}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} handleDeleteToys={handleDeleteToys} handleToyLike={handleToyLike}/>
    </>
  );
}

export default App;
