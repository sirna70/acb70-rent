import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import CarList from './components/CarList';



function App() {
  return (
    <div className="App">
      <Header />
      <SearchForm />
      <CarList />
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
