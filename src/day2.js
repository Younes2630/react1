
import React, { useState, useEffect } from 'react';

function Example(props) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(props); //make count a props to be passed in

  useEffect(()=> {
      function storeCount(count){
        

      }

}




  return (
    <div>
    
    <p>You clicked {count} times</p>
      <button onClick={() => setCount(props + 1)}>
        Click me
      </button>
    
    <p>Subtract{count} by clicking this button</p>
      <button> onClick={()=> setCount(props - 1)}
        Click me
      </button>

    <p>Increment {count} by clicking this button</p>
      <button> onClick={()=> setCount(count + props)}
        Click me
      </button>

      <p>Decrement{count} by clicking this button</p>
      <button> onClick={()=> setCount(count - props)}
        Click me
      </button>
      
    </div>
  );
}