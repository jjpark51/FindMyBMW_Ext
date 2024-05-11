import React , {useState, useEffect} from 'react';
import './App.css';



function App() {



  const [car, setCar] = useState<any | null>([{
    name: "",
    weight: 0,
    hp: 0,
    evDistance : 0,
    distance : 0,
    co2 : 0
  }
  ]);

useEffect(() => {
  fetch("/data")
  .then(res => res.json()
  .then(data=> {
    console.log(data)
    setCar({
      name: data[0].Car,
      weight: data[0].Weight,
      hp: data[0].HP,
      evDistance: data[0].EVDistance,
      distance: data[0].Distance,
      co2: data[0].CO2Emission
    })
  })
  );
}, []);


  return (
    <div className="App">
      <header className="App-header">
        <p>{car.name}</p>
        <p>{car.weight}</p>
        <p>{car.hp}</p>
        <p>{car.evDistance}</p>
        


      </header>
    </div>
  );
}

export default App;
