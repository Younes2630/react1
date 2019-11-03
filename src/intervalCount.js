import React, {useState, useEffect} from 'react';


export default function IntervalCount(){
    const[count, setCount] = useState(0)
    const[startCount, setStartcount] = useState(false)
    
    useEffect(()=>{

        // part one - what you want to do

        if(startCount = false){

            
        }
        console.log("In use effect")
        const setInt = setInterval(()=>{
            setCount(count => count +1);
        },500)

        // only if you need cleanup

        return ()=> {
            console.log("Clean up")
            clearInterval(setInt)
        
        }

    },[startCount])

    
    return (

        <div>
        <h1>{count}</h1> 
        <button onClick = {() => setStartcount(!startCount)}>Start Count</button>      
        </div>

    )
}