import './App.css';
import Jtron from './Components/MainBody/Jtron';
import Slides from './Components/MainBody/Slides';
import MainNavbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <MainNavbar/>
      <Jtron/>
      <Slides/>
    </div>
  );
}

export default App;
