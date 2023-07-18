import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home'
import MainRouter from './Routers/MainRouter';

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <MainRouter/>
    </div>
  );
}

export default App;
