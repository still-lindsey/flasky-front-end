import React from "react";
import Dog from "./Dog";

const DogList = ({dogs}) => {
  return (
    <ul>
      <h2>Dog Count: 3</h2>
      {dogs.map(dog => {
        return <Dog name={dog.name} chipNumber={dog.chipNumber} favoriteToy={dog.favoriteToy}/>
      })}
    </ul>
  );
}

export default DogList;