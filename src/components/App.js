import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  return <div>
  
  <h1 className="heading">Birthday of your soulmate</h1>
  <p className="plain">Whats yours day of birth?</p>
  <div className="container  w-75 m-auto">
  <div className="row justify-content-center">
  <input className = "col-2 me-2"></input>
  <input className="col-4 me-2"></input>
  <input className="col-2"></input>
  </div>
  </div>
  <button className="check d-block m-auto mt-5 btn ">check</button>
  <div className="couple-image m-auto">
    <img className="img-fluid w-100" src="/images/para.png" alt="para"></img>
  </div>
  <div className="eclipse-left h-100">
  <img className="img-fluid w-100" src="/images/eclipse-left.png"></img>
  </div>
  <div className="letter">
  <img className="img-fluid w-100" src="/images/letter.png"></img>
  </div>
  <p className="plain">Your soulmate birthday is:</p>
  <div></div>
  </div>
};


export default App;
