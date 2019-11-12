import React from "react";
import NavBar from "./components/NavBar";
import CarouselHome from "./components/CarouselHome";
import CardsDigimon from "./components/CardsDigimon";
import { Row, Container } from "react-bootstrap";

function App() {
  return (
    <>
      <NavBar />
      <CarouselHome />
      <div className="mt-3">
        <Container>
          <br></br>
          <Row>
            <CardsDigimon />
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
