import React from "react";

const BestPokemon = (props) => {
    // we have passed line 5 to App.j and we deleted from here
 //  const abilities = ['Anticipation', 'Adaptability', 'Run-Away']
    return(
      <div>
      <p>My favourite Pokemon is Pikachu</p>
      <ul>
      {props.abilities.map((name) => {
        return( // if there is no bracket after the return you must to write the code exactly after
     <li>{name}</li>
     )
      })}
    </ul>
      </div>
    )}

    export default BestPokemon;