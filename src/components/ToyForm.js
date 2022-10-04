import React from "react";

function ToyForm({ handleSubmit, toyName, toyImage, setToyName, setToyImage }) {

  // const [toyName, setToyName] = useState('')
  // const [toyImage, setToyImage] = useState('')

  // const newToy = {
  //   // id: '',
  //   name: toyName,
  //   image: toyImage,
  //   likes: ''
  // }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={toyName}
          onChange={(e) => setToyName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={toyImage}
          onChange={(e) => setToyImage(e.target.value)}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );


  // return (
  //   <div className="container">
  //     <form className="add-toy-form">
  //       <h3>Create a toy!</h3>
  //       <input
  //         type="text"
  //         name="name"
  //         placeholder="Enter a toy's name..."
  //         className="input-text"
  //       />
  //       <br />
  //       <input
  //         type="text"
  //         name="image"
  //         placeholder="Enter a toy's image URL..."
  //         className="input-text"
  //       />
  //       <br />
  //       <input
  //         type="submit"
  //         name="submit"
  //         value="Create New Toy"
  //         className="submit"
  //       />
  //     </form>
  //   </div>
  // );
}

export default ToyForm;
