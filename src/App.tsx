import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const card = (
  <React.Fragment>
  </React.Fragment>
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rick and Morty Explorer</h1>
        <p>Find your favourite Rick and Morty character!</p>
        <Card variant="outlined">
          <CardContent>
            <img className="Card-img" src="https://i.guim.co.uk/img/media/b563ac5db4b4a4e1197c586bbca3edebca9173cd/0_12_3307_1985/master/3307.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=61a26bf43da26e4ca97e932e5ee113f7"/>
          </CardContent>
        </Card>
        <br/>
        <Button variant="contained">Show me another one!</Button>
      </header>
    </div>
  );
}

export default App;
