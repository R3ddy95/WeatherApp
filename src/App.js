import "./App.css";
import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchWeather } from "./store/actions";
import WeatherCard from "./components/WeatherCard";
import Footer from "./components/Footer";
import { Typography, Paper, InputBase, IconButton, Grid } from "@mui/material"; // Importa i componenti Material-UI
import Lottie from "lottie-react";
import logoWeather from "./components/logo-weather.json";
import { Search } from '@mui/icons-material';



const App = (props) => {
  const [city, setCity] = useState("");
  const [invalidCity, setInvalidCity] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() === "") {
      setInvalidCity(true); // Imposta lo stato per mostrare l'errore di città vuota
      return;
    }

    setInvalidCity(false); // Resetta lo stato dell'errore quando l'input è valido
    props.fetchWeather(city); // Chiama l'azione fetchWeather per ottenere le previsioni
  };

  return (
    <div className="App">

<Grid container justifyContent="center" alignItems="center" >
  <Grid item  height={150} width={150}>
    <Lottie animationData={logoWeather} />
  </Grid>
  <Grid item>
    <Typography variant="h2" gutterBottom>
      WeatherApp
    </Typography>
  </Grid>
</Grid>

      <Grid container justifyContent="center" sx={{ pt: '20px' }}>
        <form onSubmit={handleSubmit}>
          <Paper
            component="div"
            sx={{
              p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              width: 300,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Enter a City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <IconButton type="submit" sx={{ p: '10px' }}>
              <Search />
            </IconButton>
          </Paper>
        </form>
      </Grid>

     <div>
      {/* Mostra il messaggio di errore se l'input è vuoto */}
      {invalidCity && <p>Please enter a city</p>}
      {/* Mostra il messaggio di caricamento durante il recupero dei dati */}
      {props.loading ? (
        <p>Loading...</p>
      ) : props.error ? (
        /* Mostra il messaggio di errore dell'API se presente */
        <p>Please enter a valid city, {props.error}</p>
      ) : (
        /* Mostra i dati solo se non ci sono errori né caricamenti */
        props.weatherData && <WeatherCard data={props.weatherData} />
      )}
      </div>

<Footer />
    </div>
  );
};

// Caricamento della richiesta
const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    weatherData: state.weatherData,
    error: state.error,
  };
};

const mapDispatchToProps = {
  fetchWeather, // Mappa l'azione fetchWeather alle props
};

// Connetti il componente all'architettura Redux
export default connect(mapStateToProps, mapDispatchToProps)(App);