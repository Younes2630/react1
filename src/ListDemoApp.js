import React, { useState } from "react";

function ListItem(props){
    return <li>{props.value}</li>;
}

function TableItem(props){
    return <tr><td>{props.value}</td></tr>;

}
 
function NumberList({ numbers }) {
  console.log("--NUMBERS -->",numbers)
  const listItems = numbers.map((number) =>

  <ListItem key = {number.toString()}
      value = {number} />
  );

return (
    <ul>
    {listItems}
    </ul>
  );
}

function NumberTable({numbers}) {
    const tableItems = numbers.map((number) =>
    <TableItem key = {number.toString()}
        value = {number} />
    );
    return tableItems;
}


function ListDemo(props) {
  console.log(props.numbers)
  return (
    <div>
      <h2>All numbers passed in via props</h2>
      <NumberList numbers={props.numbers} />
    </div>
  );
}

function TableDemo(props){
    return(
    <div>
        <h2>All numbers passed in via props</h2>
         <table>
             <tbody>
                <NumberTable numbers = {props.numbers} />
             </tbody>
        </table>   
    </div>

    )

}


export default function App() {
  const [numbers] = useState([1, 2, 3, 4]);
  return (
    <div>
          
          <div className = "box">
            <ListDemo numbers={numbers} />
        </div>
  

      
          <div className = "box">
            <TableDemo numbers={numbers} />
        </div>

   </div>
  ); 
}


