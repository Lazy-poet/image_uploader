import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [files, setFiles] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault(); // To prevent the submit button from refreshing the page
    const formData = new FormData() //Create an instance of FormData

    // Loop through the files array and append to formData
    for(let i = 0; i < files.length; i++){
      formData.append("files", files[i]);
    }
    // Append name input to formData
    formData.append("name", name)
    axios
    .post("http://localhost:5000/api/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));  }
  
  return (
    <div className="App">
      {/* attach the above function to listen to our form submit event */}
      <form onSubmit ={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="file"
          multiple
          onChange={(e) => setFiles(e.target.files)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
