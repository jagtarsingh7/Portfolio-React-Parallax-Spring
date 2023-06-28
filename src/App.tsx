
import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Projects from './pages/Projects';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
