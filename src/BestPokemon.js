import React, { useState, useEffect } from "react";

const BestPokemon = (props) => {

function BestPokemonFetcher(){

const [bestPokemon, setBestPokemon] = useState(null);

useEffect(() => {
    fetch(
        "https://pokeapi.co/api/v2/pokemon/1/"
    )
    .then(result => result.json())
    .then((data) => setBestPokemon(data));
    
}, []);


  if (!bestPokemon){
      return null;
  } else{
      return  <BestPokemon pokemon={bestPokemon}/>
  }
  }
  
  return(
      <div>
      <p>My favorite Pokemon is Pikachu</p>
      <ul>
      {props.abilities.map((name, index) => {
        return( 
     <li key = {index}>{name}</li>
     )
      })}
    </ul>
      </div>
    )}

    export default BestPokemon;


    // if there is no bracket after the return you must to write the code exactly after it