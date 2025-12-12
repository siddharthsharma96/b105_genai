import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Common/Header";
import { useEffect, useState } from "react";

function App() {
  const [restaurantData, setRestaurantData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:3000/Restaurant.json");
        const data = await response.json();
        setRestaurantData(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header></Header>
      {/*  BEM
      B=block
      E; ELement __
      M: Modifier --
      */}
      <Outlet
        context={{
          restaurantData,
          loading,
        }}
      ></Outlet>
    </div>
  );
}

export default App;
