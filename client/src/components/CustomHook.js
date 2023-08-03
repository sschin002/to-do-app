import React, { useState, useEffect } from "react";
import axios from "axios";

function CustomHook() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios("http://localhost:8001/api/v1/todos");
      setData(data.data);
    };
    fetchData();
  }, []);
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
