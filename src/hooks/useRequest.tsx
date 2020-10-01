import { useEffect, useState } from "react";

const toJson = (data: any) => data.json();

export const useRequest = (url: string, opts?: {}) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    fetch(url)
      .then(toJson)
      .then((data) => setData(data));
  }, []);

  return { data, isLoading, error };
};
