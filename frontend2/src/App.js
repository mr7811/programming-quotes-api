
import './App.css';
import Nav from './components/Nav.jsx'
import {Routes,Route} from 'react-router-dom'
import Home from "./screens/home.jsx"
import Quotes from "./screens/Quotes.jsx"

function App() {
  return (
    <div className="App">
   <Nav />
    <Routes>
    <Route path= "/" element={< Home />} />
    <Route path="/quotes" element ={< Quotes />} />
    </Routes>
    </div>
  );
}

export default App;
