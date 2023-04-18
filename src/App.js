import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='about' element={<AboutUs />}></Route>
        <Route path='contact' element={<Contact />}></Route>
        <Route path='projects' element={<Projects />}></Route>
      </Routes>
      <Footer />

    </>
  );
}

export default App;
