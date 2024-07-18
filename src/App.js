
import './App.css';
import BasicCard from './components/Card';
import ResponsiveAppBar from './components/Nav';


function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <header className="App-header">
        <BasicCard/>
      </header>
    </div>
  );
}

export default App;
