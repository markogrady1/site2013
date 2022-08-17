import { useState, useRef, useEffect } from 'react';
// temporary solution
import response  from './../utils/data.json';

export default function useFetch(url, base = null) {
  const isMounted = useRef(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    isMounted.current = true;
    async function init() {
      try {
// ---- REMOVE FROM HERE
        if (base) {
          const res = await fetch(base + url);
          if (res.ok) {
            const json = await res.json();
            if (isMounted.current) setData(json);
        } else {
          throw res;
        }
        } else {
        // faking it until api hooked up
          if (response) {
            setData(response[url]);
          } else {
            throw response;
          }
        }
// ---- TO HERE --- AND UNCOMMENT BELOW

      //  let baseUrl = base ?? process.env.REACT_APP_API_BASE_URL;

      //  const response = await fetch(baseUrl + url);
      //  if (response.ok) {
      //    const json = await response.json();
      //    if (isMounted.current) setData(json);
      //    } else {
      //      throw response;
      //    }
      } catch (e) {
        if (isMounted.current) setError(e);
      } finally {
        if (isMounted.current) setLoading(false);
      }
    }
    init();

    return () => {
      isMounted.current = false;
    };
  }, [url, base]);

  return { data, error, loading };
}