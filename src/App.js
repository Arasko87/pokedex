import React from 'react';
import Logo from "./Logo.js";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";


function App() {

  function logWhenClicked(){
    return console.log("This is a new message is a test of the onClick ");
    }

   return (
  <div>
   <Logo handleClick={logWhenClicked} appName="Pokedex"/>
   <BestPokemon abilities = {['Anticipation', 'Adaptability', 'Run-Away']}/>
   <CaughtPokemon date = {new Date().toLocaleDateString()}/>
    </div>
    );
}

export default App;
