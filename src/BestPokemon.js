import React from "react";

const BestPokemon = () => {
    const abilities = ['Anticipation', 'Adaptability', 'Run-Away']
    return(
      <div>
      <p>My favourite Pokemon is Pikachu</p>
      <ul>
      {abilities.map((name) => {
        return <li>{name}</li>;
      })}
    </ul>
      </div>
    )}

    export default BestPokemon;