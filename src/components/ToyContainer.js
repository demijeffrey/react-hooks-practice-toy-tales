import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, handleDelete, handleLikes }) {

  return (
    // <div id="toy-collection">{/* Render the collection of ToyCards */}</div>
    <div id="toy-collection">{toys.map(toy => <ToyCard key={toy.id} handleDelete={handleDelete} toy={toy} handleLikes={handleLikes} />)}</div>
  );
}

export default ToyContainer;
