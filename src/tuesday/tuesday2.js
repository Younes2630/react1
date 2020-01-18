
import React, { useState, useEffect } from 'react';

export default function App(props) {
  
  
  const [date, setDate] = useState(new Date().toLocaleTimeString());
  
  useEffect(() => {
    const setInt = setInterval(() => {
        setDate(new Date().toLocaleTimeString());
    },1000);

    return ()=> clearInterval(setInt);

  },[date])


    return (

  <div>
  <p>Time is: {date}</p>
  </div>




    )

}