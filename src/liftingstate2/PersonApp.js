import React, {useState} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PersonList from "./PersonList"
import NewPerson from "./NewPerson"
import uuid from "uuid/v1";

function App() {
    const initialData = [
      { id: uuid(), name: "Peter" },
      { id: uuid(), name: "Ole" },
      { id: uuid(), name: "Jan" }
    ]
    const [persons, setPersons] = useState(initialData);
    const [newPerson, setNewPerson] = useState({ id: "", name: "" });
    console.log(persons)
  
    const addPerson = person => {
      if (person.id === "") { // id=-1 Indicates a new object
        person.id = uuid();
        persons.push(person);
      } else {//if id != "", it's an existing person. Find it and add changes
        let personToEdit = persons.find(p => p.id === person.id);
        personToEdit.name = person.name;
      }
      setPersons([...persons]);
      setNewPerson({id:"", name:""})
    };
  
    const deletePerson = id => {
      setPersons([...persons].filter(person => person.id !== id));
    };
  
  
    const editPerson = id => {
      setNewPerson(persons.find(person => person.id === id));
    };
    
  
    
    return (
      <div className="container outer">
        <h2 style={{ textAlign: "center", marginBottom:25 }}>
          State Lift Demo
        </h2>
  
        <div className="row">
          <div className="col-6 allPersons">
            <PersonList persons={persons} editPerson={editPerson} deletePerson={deletePerson} />
          </div>
          <div className="col-5 new-person">
            <NewPerson
              addPerson={addPerson}
              nextPerson={newPerson}            
            />
          </div>
        </div>
      </div>
    );
  }
  export default App;