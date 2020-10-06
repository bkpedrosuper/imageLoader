import React, {useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios'

function App() {

  const [file,setfile] = useState({})
  const [url,setUrl] = useState('')

  function fileHandler(e) {
    console.log(e.target.files[0])
    setfile(e.target.files[0])
  }

  useEffect(()=>{

  }, [file,url])

  function getBaseUrl ()  {
    var reader = new FileReader();
    var baseString;
    console.log(file)
    reader.onloadend = function () {
        baseString = reader.result;
        console.log(baseString);
        setImgUrl(baseString)
        
    };
    reader.readAsDataURL(file);
    console.log(reader.result)
    // return reader.result
    // console.log(reader.readAsDataURL(file))
  }

  function setImgUrl(baseString) {
    const img = document.querySelector('#img');
    img.src = baseString;
  }

  async function fileUpload(){
    await getBaseUrl()
  }

  return (
    <div className="App">
      <input type="file" onChange={(e) => fileHandler(e)} />
      <br/>
      <button onClick={() => fileUpload()}> SEND IT TO THE INTERNET! </button>
      <br/>
      <img
        id="img"
        src={url ? url : ''}
      >
      </img>
    </div>
  );
}

export default App;
