import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import AnimalInput from "../AnimalInput/AnimalInput";
import AnimalList from "../AnimalList/AnimalList";

class App extends Component {
  render() {
    console.log(this.props.store);

    return (
      <div className="App">
        <h1>Redux with Forms and Lists!</h1>
        {this.props.store.animalsReducer.currentAnimal && (
          <h2>Looking at: {this.props.store.animalsReducer.currentAnimal}</h2>
        )}
        <AnimalInput />
        <AnimalList />
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(App);
