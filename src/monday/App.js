import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import upper, {text1, text2, text3} from "./file1";

function Welcome(props){
   const {name, phone, isMember} = props;
    const member = isMember ? "Yes" : "false"
    return <p>
    {name} phone: {phone}, isMember: {member}</p>;
}

/*Welcome.proptypes = {
  name : Proptypes.String.isRequired,
  phone : Proptypes.String,
  isMember : Proptypes.bool

}*/

Welcome.defaultProps = {
  isMember : false
}



function App() {
  return (
    <div>
      <Welcome name ="John" phone ="2323" isMember = {false}/>
      <Welcome name = "OB"/>
      <Welcome name = "Sne"/>
      <p>upper("please uppercase me"): {upper(text1)}</p>
      <p>text1: (text1)</p>
      <p>text2: (text2)</p>
      <p>text3: (text3)</p>  
  </div>
  );
}

export default App;