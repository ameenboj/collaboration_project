import React, { useEffect, useState } from "react";
import api from "../api";

export default function Ping() {
  const [axiosResult, setAxiosResult] = useState(null);
  const [fetchResult, setFetchResult] = useState(null);
  const apiBase = import.meta.env.VITE_API_URL || "http://localhost:8000/api";

  useEffect(() => {
    // Using axios
    api
      .get("/ping")
      .then((res) => setAxiosResult(res.data))
      .catch((err) => setAxiosResult({ error: err.message }));

    // Using fetch
    fetch(`${apiBase}/ping`, {
      method: "GET",
      credentials: "include",
      headers: { Accept: "application/json" },
    })
      .then((r) => r.json())
      .then((data) => setFetchResult(data))
      .catch((err) => setFetchResult({ error: err.message }));
  }, [apiBase]);

  return (
    <div style={{ padding: 12 }}>
      <h3>API Ping Test</h3>
      <div>
        <strong>Axios result:</strong>
        <pre>{JSON.stringify(axiosResult, null, 2)}</pre>
      </div>
      <div>
        <strong>Fetch result:</strong>
        <pre>{JSON.stringify(fetchResult, null, 2)}</pre>
      </div>
    </div>
  );
}
