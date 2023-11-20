import logo from './logoipsum-225.svg';
import './App.css';
import Button from './components/Button';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>App.js & App.css</code>
        </p>
        <Button label="Click me" />
      </header>
    </div>
  );
}

export default App;
