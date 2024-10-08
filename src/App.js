import React from 'react';
import './App.css';
import SheetData from './components/SheetData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Google Sheets Data Viewer</h1>
      </header>
      <main>
        <SheetData />
      </main>
    </div>
  );
}

export default App;
