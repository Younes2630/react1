import React from 'react';
import person from "./file2"
import upper, { males, females } from "./file2";
import {names} from "./file2"

const [firstName, lastName, gender, email] = person;

const pers = [firstName, email];

const personFull = { 
    email : person.email,
    firstName : person.firstName,
    lastName: person.lastName,
    friends: [...males, ...females],
    gender: person.gender,
    phone : 123456

};


function App(){
    return(
        <div className= "App">
        <p>FirstName : {firstName}, Email: {email}</p>
        </div>

    );

}

const all = [...males, ...females];
const everybody = [...males, "Kurt", "Helle", ...females, "Tina"];
console.log(all);
console.log(everybody);





 export default App2;