import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './SearchBox.css';
import { useState } from 'react';
import React from 'react';

export default function SearchBox() {
    let [city, setCity] = useState("");
    let [weatherInfo, setWeatherInfo] = useState(null);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "c6fba9098b53169ea56e7dc3eabeeb83"

    const getWeatherInfo = async () => {
        let url = `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`;
        let res = await fetch(url);
        let data = await res.json();

        setWeatherInfo(data);   // 🔥 STORE DATA
    };


    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        event.preventDefault();
        await getWeatherInfo();
        setCity("");
    }

    return <div>
        <h3>SearchBox</h3>
        <form onSubmit={handleSubmit}>

            <TextField
                id="city"
                label="City_Name"
                variant="outlined"
                required value={city}
                onChange={handleChange} />
            <br></br>
            <br></br>

            <Button
                type="submit"
                variant="contained"
                endIcon={<SendIcon />}>Send
            </Button>

        </form>
        {weatherInfo && (
            <div>
                <h3>{weatherInfo.name}</h3>
                <p>Temperature: {weatherInfo.main.temp} °C</p>
                <p>Feels Like: {weatherInfo.main.feels_like} °C</p>
                <p>Weather: {weatherInfo.weather[0].main}</p>
                <p>Wind Speed: {weatherInfo.wind.speed} m/s</p>
            </div>
        )}

    </div>
}