import React, { useState, useEffect } from 'react';

export default function App(props) {
    const { initialValue, incrementValue } = props; 
    const [count, setCount] = useState(Number(localStorage.getItem("count")) || initialValue);

    useEffect(() => {
        document.title = `The count is ${count}`;
    });

    useEffect(() => {
        localStorage.setItem("count", count);

    },[count]);

    
    
    return (
        <div>
        
        <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
        
        <p>You have subtracted 1 from {count} </p>
          <button> onClick={()=> setCount(count - 1)}
            Click me
          </button>
    
        <p>You have incremented to get this number: {count}</p>
          <button> onClick={()=> setCount(count + incrementValue)}
            Click me
          </button>
    
          <p>You have decremented to get this number: {count}</p>
          <button> onClick={()=> setCount(count - incrementValue)}
            Click me
          </button>
          
        </div>
      );
    }