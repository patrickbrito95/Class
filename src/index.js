import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  constructor(props) {
    super(props);
    // Aqui inicializamos o State com algum valor, que no caso aqui é Null/""
    // Aqui temos uma exceção que podemos atribuir o 'this.state' a outro valor!!
    this.state = { lat: null, errMessage: "" };
  }

  // state = { lat: null, errMessage: ''}; <-- Essa forma tem o mesmo efeito da função construtora acima, pode substituí-la sem problemas.

  // ComponentDidMount é chamado automaticamente quando o componente é renderizado na tela (Bom lugar para carregamento inicial de dados)
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      // Aqui atualizamos o State buscando o valor dentro do objeto
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errMessage: err.message })
    );
  }
  // ComponentDidUpdate é chamado quando há atualização no State, e ele é rerenderizado (Bom lugar para carregamento de dado quando State/Props atualizam)
  componentDidUpdate() {
    console.log("My component was just updated - it rerendered!");
  }


// Foi criada essa função 'renderComponents()' para organizar e evitar ter condicionais dentro do render() 

  renderComponents(){
    if (this.state.errMessage && !this.state.lat) {
      return <h1>Error: {this.state.errMessage}</h1>;
    }

    if (this.state.lat && !this.state.errMessage) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    if (!this.state.lat && !this.state.errMessage) {
      return <Spinner message="Solicitando sua localização..." />;
    }
  }
  
// Dentro do render, foi chamado o 'this.renderComponents()' para renderizar toda lógica feita através da função

  render() {
    return (
      <>
      {this.renderComponents()}
      </>
    )
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
