import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState({});
  const [input, setInput] = useState('');


  // the url  of the open wether api   
  // you must have your own api key
  // you can get it from https://openweathermap.org/api


  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=09f70d76a9ee6afca4211df4509e9871&units=metric`;

  const displayWeather = async (e) => {
    if (e.key === 'Enter' && input.trim() !== '') {
      try {
        const response = await axios.get(URL);
        setData(response.data);
        console.log(response.data);
        setInput('');
      } catch (err) {
        setInput('');
        console.error("Error fetching data:", err);
        alert("City not found. Please check the name or API key.");
      }
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-10 bg-custom text-white px-4">
      <h1 className="text-5xl font-bold">Weather App</h1>
      
      <input
        type="text"
        onKeyDown={displayWeather}
        onChange={e => setInput(e.target.value)}
        placeholder="Enter city name"
        className="p-4 w-full max-w-md rounded-md text-black text-lg border-2 border-white outline-none"
        value={input}
      />

      {
      
      data.name && (   // this block renders only if the data exists .
        <div className="bg-white text-black rounded-lg p-8 shadow-lg flex flex-col items-center gap-4 w-full max-w-md">
          <h2 className="text-3xl font-bold">📍 {data.name}, {data.sys?.country}</h2>
          <p className="text-5xl font-bold">{Math.round(data.main?.temp)}°C</p>
          <p className="text-xl capitalize">{data.weather?.[0]?.description}</p>
          <div className="flex justify-between w-full text-center mt-4">
            <div className="w-1/3">
              <p className="font-bold">{Math.round(data.main?.feels_like)}°C</p>
              <p className="text-sm">Feels Like</p>
            </div>
            <div className="w-1/3">
              <p className="font-bold">{data.main?.humidity}%</p>
              <p className="text-sm">Humidity</p>
            </div>
            <div className="w-1/3">
              <p className="font-bold">{data.wind?.speed} m/s</p>
              <p className="text-sm">Wind</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
