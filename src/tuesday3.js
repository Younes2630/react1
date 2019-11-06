import React, { useState, useEffect } from "react";

export default function App() {
  

  const[chuckJoke, setChuckJoke] = useState({value: ""});
  const[dadJoke, setDadJoke] = useState("");
  const[jokeSelector, setJokeSelector] = useState(false);

  
  useEffect(() => {
      fetchChuckJokes();
  },[jokeSelector]);

  useEffect(() => {
    const setInt = setInterval(() => {
      
      fetchDadJokes();
      }, 10000)

      return () => {
        clearInterval(setInt);
      }
},[jokeSelector]);


  function fetchChuckJokes(){
    fetch("https://api.chucknorris.io/jokes/random")
    .then(res=>res.json())
    .then(chuckJoke=>{
      setChuckJoke(chuckJoke.value);
    })
    .catch(err => console.log(err))
};

function fetchDadJokes(){
  fetch("https://icanhazdadjoke.com/",{
  headers: {
    Accept: 'application/json'
  }
})
  .then(res => res.json())
  .then(dadJoke => {
    setDadJoke(dadJoke);
  })
  .catch(err => console.log(err))
};

  return (
    <div>
      
      <div className ="box">
      <h2>Here you have a Chuck Norris joke</h2>
      <p> Joke: {chuckJoke.value} </p>
      <button onClick={()=> setJokeSelector(!jokeSelector)}>Get Chuck Norris joke</button>  
    </div>

      <div className ="box">
      <h2>Here you have a bad dad joke</h2>
      <p> Joke: {dadJoke} </p>
      <button onClick={()=> setJokeSelector(!jokeSelector)}>Get a dad joke</button>
     </div>

  
 </div>
  );
}
