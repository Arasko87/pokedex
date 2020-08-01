import React from "react";

const Logo = (props) =>{
        // we have passed line 5 to App.j and we deleted from here
    // const appName = "Pokedex";
   
    return(
    <header>
      <h1> Welcome to the {props.appName} </h1>
      <img onClick={props.handleClick} src ="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYvLffuKqbWPk0NgQpFvlfDynzU9cS1sZYZw&usqp=CAU" alt ="pikachu" ></img>
    </header>
    )
  }



  export default Logo;