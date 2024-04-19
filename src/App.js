import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Componets/Navbar';
import Footer from './Componets/Footer';
import HomePage from './Pages/HomePage';
import OpenHourPage from './Pages/OpenHourPage';
import ChoosePage from './Pages/ChoosePage';
import ContactPage from './Pages/ContactPage';
import ServicesPage from './Pages/ServicesPage';
import AboutPage from './Pages/AboutPage';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/openhour' element={<OpenHourPage />} />
          <Route path='/pricing' element={<ChoosePage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/services' element={<ServicesPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/*' element={<HomePage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
