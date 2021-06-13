import React from 'react';

export function add(num1, num2) {
  num1 == num2
  return num1 + num2
}

function App() {
  const result = add(1,2)
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> {result} and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
