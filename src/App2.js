import React from 'react';
import upper, { males, females } from "./file2";
import {names} from "./file2"

const [firstName, lastName, gender, email] = person;

const oneLiner = [firstName, email];

const personV2 = { 
    email : person.email,
    firstName : person.firstName,
    lastName: person.lastName,
    friends: [...males, ...females],
    gender: person.gender,
    phone : 123456

};


export default function App2(){
    return(
        <div>
        <p>console.log(oneLiner)</p>
        <p>console.log(personV2)</p>
        </div>

    )



}


// export default App2;