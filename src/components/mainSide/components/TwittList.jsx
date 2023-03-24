import React from "react";
import CreateTwitt from "./CreateTwitt";

const TwittList = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <CreateTwitt data={item} />
      ))}
    </div>
  );
};

export default TwittList;
