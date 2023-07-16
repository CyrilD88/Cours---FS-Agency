import React from "react";
import { NavLink } from "react-router-dom";

const Buttons = (props) => {
  return (
    <div className="scroll-bottom">
      {props.left && (
        <NavLink to={props.left} className="left hover">
          <span>&#10092;</span>
        </NavLink>
      )}
      {props.right && (
        <NavLink to={props.right} className="right hover">
          <span>&#10093;</span>
        </NavLink>
      )}
    </div>
  );
};

export default Buttons;

// --------------------------------------------------------------------- EXPLICATIONS------------------------------------------------------------------------------

// 1 ==> créer la const Buttons.
// 2 ==> créer les NavLink en mettant un chemin dynamique {} et une className.
// 3 ==> mettre le composant "Button" dans la page qui nous intéresse (ici Home) avec le chemin dynamique         <Buttons right={"/projet-1"} />
// 4 ==> mettre le mot props dans la constante   const Buttons = (props) =>
// 5 ==> faire la fonction dynamique par exemple ici ==> si il y a un chemin a gauche

// {props.left && (
//     <NavLink to={props.left} className="left hover">
//       <span>&#10092;</span>
//     </NavLink>
//   )}
