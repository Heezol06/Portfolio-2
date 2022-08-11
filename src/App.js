import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Contacts from './component/Contacts/Contacts';
import Home from './component/Home/Home';
import Resume from './component/Resume/Resume';
import Footer from './component/Shared/Footer/Footer';
import Navbar from './component/Shared/Navbar/Navbar';
import Works from './component/Works/Works';
import bg from './asset/bg.jpeg';

function App() {
  return (
    <div className="App bg-no-repeat bg-fixed bg-cover" style={{backgroundImage: `url(${bg})`}}>
      <BrowserRouter>
      <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/resume" element={<Resume/>} />
      <Route path="/works" element={<Works/>} />
      <Route path="/contacts" element={<Contacts/>} />
    </Routes>
    <Footer></Footer>
  </BrowserRouter>
    </div>
  );
}

export default App;
