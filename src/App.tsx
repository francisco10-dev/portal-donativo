import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Layout from './components/Layout/layout';
import LandingPage from './components/landing/landing';

const App: React.FC = () => {
  //@ts-ignore
  const [showMain, setShowMain] = useState(false);

  // Inicializar AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Función para manejar la navegación
  const handleNavigate = () => {
    localStorage.setItem('isLanding', 'false');
    setShowMain(true); // Cambia el estado para mostrar Sidebar y Content
  };

  const renderContent = () => {
    const value = localStorage.getItem('isLanding');
    return value ? <Layout /> : <LandingPage onVisit={handleNavigate} />;
  };

  return (
    <Router>
      <div>
        {renderContent()}
      </div>
    </Router>
  );
};

export default App;
