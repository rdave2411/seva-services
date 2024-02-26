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
import NoteFoundPage from './webpages/NotFoundPage';
import DomesticAssistance from './webpages/Services/DomesticAssistance';
import PersonalCare from './webpages/Services/PersonalCare';
import MealPreparation from './webpages/Services/MealPreparation';
import InHomeRespite from './webpages/Services/InHomeRespite';
import GroupActivities from './webpages/Services/GroupActivities';
import TransportAssistance from './webpages/Services/TransportAssistance';
import NursingServices from './webpages/Services/NursingServices';
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
            <Route path='/seva-services' element={<HomePage />} />
            <Route path='/services' element={<ServicesPage />} />
            <Route path='/news' element={<NewsPage />} />
            <Route path='/referral' element={<ReferralPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/service1' element={<DomesticAssistance />} />
            <Route path='/service2' element={<PersonalCare />} />
            <Route path='/service3' element={<MealPreparation />} />
            <Route path='/service4' element={<InHomeRespite />} />
            <Route path='/service5' element={<GroupActivities />} />
            <Route path='/service6' element={<TransportAssistance />} />
            <Route path='/service7' element={<NursingServices />} />
            <Route path='*' element={<NoteFoundPage />} />
          </Routes>
        </div>
        <Footer />
    </Router>
  );
}

export default App;
