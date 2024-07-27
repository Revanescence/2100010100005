import React, { useState } from 'react';
import { fetchNumbers } from './api';

function App() {
  const [numberId, setNumberId] = useState('p');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFetch = async () => {
    setLoading(true);
    setError(null);
    const result = await fetchNumbers(numberId);
    if (result) {
      setData(result);
    } else {
      setError('Error fetching numbers');
    }
    setLoading(false);
  };

  return (
    <>
    <div className="App">
      <h1>Average Calculator</h1>
      <label>
        Select Number Type:
        <select value={numberId} onChange={(e) => setNumberId(e.target.value)}>
          <option value="p">Prime</option>
          <option value="f">Fibonacci</option>
          <option value="e">Even</option>
          <option value="r">Random</option>
        </select>
      </label>
      <button onClick={handleFetch}>Fetch Numbers</button>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && (
        <div>
          <h2>Results</h2>
          <p><strong>Previous State:</strong> {JSON.stringify(data.windowPrevState)}</p>
          <p><strong>Current State:</strong> {JSON.stringify(data.windowCurrState)}</p>
          <p><strong>Fetched Numbers:</strong> {JSON.stringify(data.numbers)}</p>
          <p><strong>Average:</strong> {data.avg}</p>
        </div>
      )}
    </div>
    </>
  );
}

export default App;
