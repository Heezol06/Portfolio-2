import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Contacts from './component/Contacts/Contacts';
import Home from './component/Home/Home';
import Resume from './component/Resume/Resume';
import Navbar from './component/Shared/Navbar/Navbar';
import Works from './component/Works/Works';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/resume" element={<Resume/>} />
      <Route path="/works" element={<Works/>} />
      <Route path="/contacts" element={<Contacts/>} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
