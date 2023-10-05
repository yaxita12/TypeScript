
import { useState, useEffect } from "react";
import "./styles.css";

type resultProps = {
    id: number;
    description: string;
};

export default function App() {
  const [result, setResult] = useState<resultProps[]>([]);

  useEffect(() => {
    const api = async () => {
      const data = await fetch("https://fakestoreapi.com/products", {
        method: "GET"
      });
      const jsonData = await data.json();
      setResult(jsonData.results);
    };

    api();
  }, []);

  return (
    <div className="App">
      <h1>
        {result.map((value) => {
          return (
            <div>
              <div>{value.id}</div>
              <div>{value.description}</div>
            </div>
          );
        })}
      </h1>
     
    </div>
  );
}

