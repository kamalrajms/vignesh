import React from "react";
import { useParams } from "react-router-dom";

export default function BolgDetailes() {
  const { id } = useParams;
  console.log(id);

  return (
    <div>
      <h2>Blog Detailes-{id}</h2>
    </div>
  );
}
