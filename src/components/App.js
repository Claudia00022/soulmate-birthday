import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  const[day, setDay] = useState("");
  const[month,setMonth] = useState("");
  const[year, setYear] = useState("");

  const[randomD, setRandomD] = useState("");
  const[randomM, setRandomM] = useState("");



  const days = Array.from({length: 31}, (_, index) => index +1);
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December" ];
  const years = Array.from({length:100}, (_, index) => 2022 - index);

  const randomDay = Math.floor((Math.random() * 30)+1);
  const randomMonth = months[Math.floor(Math.random() * 12)];

  function handleClick(){
    setDay("");
    setMonth("");
    setYear("");

    setRandomD(randomDay);
    setRandomM(randomMonth);


  
  }
  return <div>
  
  <h1 className="heading">Birthday of your soulmate</h1>
  <p className="plain">Whats yours day of birth?</p>
  <div className="container  w-75 m-auto">
  <div className="row justify-content-center">
  {/* <input className = "col-2 me-2"></input>
  <input className="col-4 me-2"></input>
  <input className="col-2"></input> */}


      <select className=" text col-2 me-5 pt-2 pb-2 "  value={day} onChange={(e) => setDay(e.target.value)}>
        <option value="">Select Day</option>
        {days.map((d) => (
          <option key={d} value={d}>{d}</option>
        ))}
      </select>
      

    
      <select className=" text col-4 me-5"value={month} onChange={(e) => setMonth(e.target.value)}>
        <option  value="">Select Month</option>
        {months.map((m, index) => (
          <option key={index + 1} value={index + 1}>{m}</option>
        ))}
      </select>

   
      <select className="text col-2 me-2" value={year} onChange={(e) => setYear(e.target.value)}>
        <option value="">Select Year</option>
        {years.map((y) => (
          <option key={y} value={y}>{y}</option>
        ))}
      </select>

  </div>
  </div>
  <button className="check d-block m-auto mt-5 btn mb-3 "  onClick = {handleClick}>check</button>
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

  <div class="sign">
      <span class="fast-flicker">{randomD}</span> 
       <span class="flicker">{randomM}</span>
    </div>

  </div>
};


export default App;
