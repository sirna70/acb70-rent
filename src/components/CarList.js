import React, { useState, useEffect } from 'react';

const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch('/api/cars') // Ganti dengan URL endpoint yang benar
      .then(response => response.json())
      .then(data => setCars(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="car-list">
            {/* All New Avanza */}
            {/* Innova Reborn */}
            {/* All New Rush */}
    </div>
  );
}

export default CarList;