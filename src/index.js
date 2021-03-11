import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    // Aqui inicializamos o State com algum valor, que no caso aqui é "Null"
    // Aqui temos uma exceção que podemos atribuir o 'this.state' a outro valor!!
    this.state = { lat: null, errMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // Aqui atualizamos o State buscando o valor dentro do objeto
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errMessage: err.message });
      }
    );
  }

  // O React diz: Precisamos definir o 'render()'!!
  render() {
    if (this.state.errMessage && !this.state.lat) {
      return <h1>Error: {this.state.errMessage}</h1>;
    }

    if (this.state.lat && !this.state.errMessage) {
      return <h1>Latitude: {this.state.lat}</h1>;
    }

    if (!this.state.lat && !this.state.errMessage) {
      return <h1>Loading...</h1>;
    }
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
