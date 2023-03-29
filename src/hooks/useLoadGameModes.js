import { useState, useEffect } from "react";

export function useLoadGameModes() {
  const [gameModes, setGameModes] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://60816d9073292b0017cdd833.mockapi.io/modes")
      .then((res) => res.json())
      .then((data) => {
        const mappedData = data.map((el) => ({
          label: el.name,
          value: String(el.field),
          id: el.id,
        }));
        setGameModes(mappedData);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    error,
    gameModes,
    isLoading,
  };
}
