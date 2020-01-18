import React from 'react';
import PropTypes from 'prop-types';

const PersonList = ({ persons, deletePerson, editPerson }) => {
  return (
    <React.Fragment>
      <h2>All Persons - Complete me</h2>
      <table>
        {persons.map(person => (
          <li key={persons.id}>{person.name}
          <a href="#/" onClick= {e => deletePerson(person.id)}>
            {" "}
          (delete{" "}
          </a>
          <a href="#/" onClick= {() => editPerson(person.id)}>
            , edit){" "} 
            </a>
          </li>
        ))}
      </table>
    </React.Fragment>
  );
};
export default PersonList;

PersonList.propTypes = {
  persons: PropTypes.array
}