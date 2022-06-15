import React from "react";

const Dog = ({name, favoriteToy, chipNumber}) => {
  return (
    <li>
      <h3>{name}</h3>
      <span>Favorite toy: {favoriteToy} </span>
      <span>Chip #: {chipNumber} </span>
    </li>
  )
}

export default Dog;