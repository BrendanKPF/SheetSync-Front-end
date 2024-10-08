import React, { useEffect, useState } from 'react';

const SheetData = () => {
  const [sheetData, setSheetData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    fetch('/sheet-data')  // Proxy handles API requests
      .then((response) => response.json())
      .then((data) => setSheetData(data))
      .catch((error) => console.error('Error fetching sheet data:', error));
  }, []);

  return (
    <div>
      <h1>Google Sheets Data</h1>
      {sheetData.length > 0 ? (
        <table>
          <thead>
            <tr>
              {sheetData[0].map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sheetData.slice(1).map((row, index) => (
              <tr key={index}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default SheetData;
