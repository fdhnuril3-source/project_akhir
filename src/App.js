import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Nav';
import Footer from "./components/Footer";
import Home from './pages/Home';
import Routing from './components/Routing';


function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routing />
    <Footer />
    </BrowserRouter>
  );
}

export default App;
