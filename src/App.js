import logo from './logo.svg';
import './App.css';
import Weather from "./weather"


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1><Weather city="New York"/></h1>
      </header>
    </div>
  );
}

export default App;
