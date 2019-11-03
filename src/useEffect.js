import React, { useState, useEffect } from "react";

export default function SearchResults() {
  const [todo, setTodo] = useState({ title: "" });
  const [id, setId] = useState(1);

  const[joke, setJoke] = useState({value: ""});
  const[jokeSelector, setJokeSelector] = useState(false);




  useEffect(() => {
    function fetchTodo() {
      console.log("Fetching")
      fetch('https://jsonplaceholder.typicode.com/todos/'+id)
      .then(res=>res.json())
      .then(data =>  setTodo(data))  
      .catch(err => console.log("Ups"+err))
    }
    fetchTodo();

},[id]);


    useEffect(() => {
    function fetchChuckJokes(){
        fetch("") //paste in api
        .then(res=>res.json())
        .then(joke=>{setJoke(joke);})
        .catch(err => console.log("Chuck Error" + err))
    }
    fetchChuckJokes();

  },[jokeSelector]);

  return (
    <>
      <input value={id} onChange={e => setId(e.target.value)} />
      <button onClick={()=> setJokeSelector(!jokeSelector)}>Get Chuck Norris joke</button>  

 
      <p> Name: {todo.title} /</p>

      <p> Joke: {joke.value} </p>
     
    </>
  );
}
