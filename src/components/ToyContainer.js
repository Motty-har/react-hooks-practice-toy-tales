import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, handleDeleteToys, handleToyLike}) {
  return (
    <div id="toy-collection">{toys.map((toy) => {
      return <ToyCard key={toy.id} toy={toy} handleDeleteToys={handleDeleteToys}  handleToyLike={handleToyLike}/>
    })}</div>
  );
}

export default ToyContainer;
