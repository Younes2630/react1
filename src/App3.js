import React from 'react';
import PropTypes from 'prop-types';
import {names} from "./file2";

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

  Welcome.proptypes = {
    name : PropTypes.string.isRequired
  }

  const person = {
        firstName: names.firstName,
        lastName : names.lastName,
        email : names.email    

  };

  function WelcomePerson(props){
    return <h1>
      Firstname:, {person.firstName}
      Lastname:, {person.lastName}
      Email:, {person.email}
    </h1>;

  }

  WelcomePerson.proptypes = {
      firstName: PropTypes.objectOf(PropTypes.string.isRequired),
      lastName: PropTypes.objectOf(PropTypes.string.isRequired),
      email: PropTypes.objectOf(PropTypes.string.isRequired)
}
  
  function App() {
    return ({}
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
        <WelcomePerson person = {names[0]}/>
        <WelcomePerson person = {names[1]}/>
        <WelcomePerson person = {names[2]}/>
      </div>
    );
  }

  //{names.map(()=><WelcomePerson/>)}
  
  export default App;