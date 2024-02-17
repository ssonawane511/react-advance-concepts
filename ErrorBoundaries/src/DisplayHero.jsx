import React from "react";

const DisplayHero = (props) => {
  const { name } = props;

  if (name === "joker") {
    throw new Error("This character is not hero");
  }
  return (
    <div>
      <h1>Hero name is {name}</h1>
    </div>
  );
};

export default DisplayHero;
