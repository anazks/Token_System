import logo from './logo.svg';
import './App.css';
import Nav from './Components/NavBar/Nav';
import Buttons from './Components/Row/Buttons';
import ActionDiv from './Components/ActionDiv/ActionDiv';
import Display from './Components/displayDiv/Display';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Buttons/>
      <ActionDiv/>
      <Display/>
    </div>
  );
}

export default App;
