import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// Import
import NavigationBar from './components/Navigation/NavigationBar';
import Footer from './components/Footer/Footer';

// Import your webpage components
import HomePage from './webpages/Home';
import ServicesPage from './webpages/Services';
import NewsPage from './webpages/News';
import ReferralPage from './webpages/Referral';
import ContactPage from './webpages/Contact';
import DomesticAssistance from './webpages/Services/DomesticAssistance';
import MottoDivider from './components/MottoDivider/MottoDivider';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
        <NavigationBar />
        <div className='divider'/>
        <MottoDivider motto="Quality Home Care" />
        <div className='container'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/services' element={<ServicesPage />} />
            <Route path='/news' element={<NewsPage />} />
            <Route path='/referral' element={<ReferralPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/service1' element={<DomesticAssistance />} />
          </Routes>
        </div>
        <Footer />
    </Router>
  );
}

export default App;
