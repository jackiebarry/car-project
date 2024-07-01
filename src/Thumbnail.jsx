import React from "react";

function Thumbnail({ imgUrl }) {
  return (
    <>
      <img src={imgUrl} width="500px" max-height="300px" />
    </>
  );
}

export default Thumbnail;
