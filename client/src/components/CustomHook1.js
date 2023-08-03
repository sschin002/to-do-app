import React, { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

function CustomHook() {
  const { data, lodaing, error } = useFetch(
    "http://localhost:8001/api/v1/todos"
  );
  if (lodaing) return <div>Loading...</div>;
  if (error) return <div>{error?.message}</div>;
  return (
    <>
      {data && data.length > 0 && (
        <>
          <ul>
            {data.map((todo, index) => (
              <li key={index}>{todo?.title}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

export default CustomHook;
