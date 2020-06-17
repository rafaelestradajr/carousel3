import React from "react";
import ReactDOM from "react-dom";
import { Container } from "semantic-ui-react";
import "pure-react-carousel/dist/react-carousel.es.css";
import ImageCarousel from "./carousel/ImageCarousel";

function App() {
  return (
    <Container style={{ margin: 600 }}>   

      
     
      
        <ImageCarousel />
      
    </Container>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
