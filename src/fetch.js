import React, { useState, useEffect } from 'react';

const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Mengambil data mobil dari backend Golang
    fetch('/api/cars')
      .then(response => response.json())
      .then(data => setCars(data))
      .catch(error => console.error('Error:', error));
  }, []); // useEffect akan dipanggil hanya sekali setelah komponen dipasang

  return (
    <div className="car-list">
      {cars.map(car => (
        <div key={car.id} className="car">
          <h3>{car.name}</h3>
          <p>Brand: {car.brand}</p>
          <p>Year: {car.year}</p>
        </div>
      ))}
    </div>
  );
}

export default CarList;
