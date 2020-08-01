import React,{useState} from "react";

const CaughtPokemon = (props) =>{

  const [totalNumber, setCount] = useState(0);
  function incrementTotal() {
    setCount(totalNumber + 1);
  }

    return (
      <div>
      <p>Caught {totalNumber} Pokemon on {props.date}</p>
      <button className="button" onClick = {incrementTotal}>Add a Pokemon</button>
      </div>
    )
  }

  export default CaughtPokemon;