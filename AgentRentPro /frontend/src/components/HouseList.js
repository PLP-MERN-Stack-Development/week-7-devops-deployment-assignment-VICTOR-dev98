import React, { useEffect, useState } from "react";
import axios from "axios";

const HouseList = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/houses`)
      .then((res) => setHouses(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>Houses</h2>
      <ul>
        {houses.map((house) => (
          <li key={house._id}>
            House #{house.number} - Tenant: {house.tenant} - Rent Paid: {house.rentPaid ? "✅" : "❌"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HouseList;
