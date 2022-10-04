import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {

  const [allToys, setAllToys] = useState([])
  const [showForm, setShowForm] = useState(false);
  const [toyName, setToyName] = useState('')
  const [toyImage, setToyImage] = useState('')

  useEffect(() => {
    fetch('http://localhost:3001/toys')
      .then(res => res.json())
      .then(toys => setAllToys(toys))
  }, [allToys])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newToy = {
      name: toyName,
      image: toyImage,
      likes: ''
    }
    fetch('http://localhost:3001/toys', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newToy)
    })
      .then(res => res.json())
      .then(data => setAllToys([...allToys, data]))
  }

  function handleDelete(id) {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'DELETE'
    })
  }

  function handleLikes(toy) {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        'likes': toy.likes + 1
      })
    })
      // .then(res => res.json())
      // .then(data => console.log(data))
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm handleSubmit={handleSubmit} toyName={toyName} toyImage={toyImage} setToyImage={setToyImage} setToyName={setToyName} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={allToys} handleDelete={handleDelete} handleLikes={handleLikes} />
    </>
  );
}

export default App;
