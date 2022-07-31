import React from 'react';
import './App.css';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rick and Morty Explorer</h1>
        <p>Find your favourite Rick and Morty character!</p>
        <Card variant="outlined">
          <CardContent>
            <img alt="" className="Card-img" src="https://media.cdn.adultswim.com/uploads/20210914/219141616186-1910281358343-RAM.jpg"/>
          </CardContent>
        </Card>
        <br/>
        <Button variant="contained">Show me another one!</Button>
      </header>
    </div>
  );
}

export default App;
