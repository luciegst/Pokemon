import React, { Component } from 'react';
import './App.css';
import Pokemon from './Pokemon';
import { Container, Row, Col } from 'reactstrap';


class App extends Component {
  


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src= "https://pre00.deviantart.net/c431/th/pre/f/2017/091/4/c/all_legendary_pokemon_in_png_by_davidbksandrade-db48l6l.png" className="App-logo" alt="logo" />
        </header>
        <img className="pokeball" src="https://toppng.com/public/uploads/preview/pokeball-11530983148cdujwkohwx.png" alt="pokeball"/>
        <Container>
        <Row>
          <Col lg="4">
            <Pokemon
              image="https://www.pokepedia.fr/images/thumb/f/f2/L%C3%A9viator-RFVF.png/250px-L%C3%A9viator-RFVF.png"
              name="Leviator"
              type="Eau"
              />
          </Col>
          <Col lg="4">
            <Pokemon
              image="https://www.pokepedia.fr/images/thumb/1/17/Dracaufeu-RFVF.png/250px-Dracaufeu-RFVF.png"
              name="Dracaufeu"
              type="Feu"
               />
          </Col>
          <Col lg="4">
            <Pokemon
              image="https://www.pokepedia.fr/images/thumb/2/24/Tortank-RFVF.png/250px-Tortank-RFVF.png"
              name="Tortank"
              type="Eau"
              />
          </Col>
        </Row>
        </Container>
        <footer>
          <img className="footerLogo" src="http://i.imgur.com/1jBybmE.png" alt="logoPokemon"/>
        </footer>
      </div>
    );
  }
}

export default App;
