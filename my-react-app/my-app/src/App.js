import "./App.css";
import React, { useState, useEffect } from 'react';

const data = [
  { name: "Tesla", model: "Model X", year: 2024, price: 79990 },
  { name: "Ford", model: "F-Series", year: 2024, price: 36965 },
  { name: "Toyota", model: "Camry", year: 2024, price: 35430 },
  { name: "Honda", model: "CR-V", year: 2024, price: 30850 },
  { name: "Mazda", model: "CX-5", year: 2024, price: 29300 },
  { name: "Bugatti", model: "Chiron", year: 2024, price: 4899000 },
  { name: "Mercedes", model: "AMG C 63", year: 2024, price: 83900 },
  { name: "Ferrai", model: "SF90 Spider", year: 2024, price: 580000 },
  { name: "Jeep", model: "Wrangler", year: 2024, price: 31995 },
  { name: "Subaru", model: "Outback", year: 2024, price: 28895 },
  { name: "Nissan", model: "Rouge", year: 2024, price: 29600 },
];

function App() {
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Model</th>
            <th>Year</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.name}</td>
                <td>{val.model}</td>
                <td>{val.year}</td>
                <td>{val.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
   }


export default App;