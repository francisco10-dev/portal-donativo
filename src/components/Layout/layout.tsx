import React, { useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { UsersIcon, CollectionIcon, ClipboardListIcon, MenuIcon } from '@heroicons/react/outline';
import FormularioPublicacion from '../form';
import PublicacionesAyuda from '../portal';
import Usuarios from '../users/users';

// Componente del menú móvil (drawer)
const MobileMenu: React.FC<{ isOpen: boolean; toggleMenu: () => void }> = ({ isOpen, toggleMenu }) => {
  const location = useLocation();
  
  return (
    <div
      className={`fixed inset-0 bg-gray-800/90 backdrop-blur-sm z-50 transition-all duration-300 ease-in-out ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="flex flex-col items-center justify-center h-full space-y-2">
        <Link
          to="/usuarios"
          className={`text-white text-xl py-4 px-6 rounded-lg transition-all duration-200 w-64 text-center ${
            location.pathname === '/usuarios' ? 'bg-blue-600' : 'hover:bg-gray-700'
          }`}
          onClick={toggleMenu}
        >
          <UsersIcon className="h-5 w-5 mr-3 inline-block" />
          Usuarios
        </Link>
        <Link
          to="/publicaciones"
          className={`text-white text-xl py-4 px-6 rounded-lg transition-all duration-200 w-64 text-center ${
            location.pathname === '/publicaciones' ? 'bg-blue-600' : 'hover:bg-gray-700'
          }`}
          onClick={toggleMenu}
        >
          <CollectionIcon className="h-5 w-5 mr-3 inline-block" />
          Publicaciones
        </Link>
        <Link
          to="/registrar"
          className={`text-white text-xl py-4 px-6 rounded-lg transition-all duration-200 w-64 text-center ${
            location.pathname === '/registrar' ? 'bg-blue-600' : 'hover:bg-gray-700'
          }`}
          onClick={toggleMenu}
        >
          <ClipboardListIcon className="h-5 w-5 mr-3 inline-block" />
          Registrar
        </Link>
      </div>
    </div>
  );
};

// Componente de opciones del Sidebar
const Sidebar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { path: '/usuarios', icon: UsersIcon, label: 'Usuarios' },
    { path: '/publicaciones', icon: CollectionIcon, label: 'Publicaciones' },
    { path: '/registrar', icon: ClipboardListIcon, label: 'Registrar' },
  ];

  return (
    <div>
      {/* Botón de hamburguesa mejorado */}
      <button
        onClick={toggleMenu}
        className="md:hidden fixed top-4 left-4 z-50 p-3 rounded-lg bg-white shadow-lg hover:bg-gray-100 transition-colors duration-200"
        aria-label="Toggle menu"
      >
        <MenuIcon className="h-6 w-6 text-gray-800" />
      </button>

      {/* Menú móvil tipo Drawer */}
      <MobileMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />

      {/* Sidebar para pantallas grandes */}
      <div className="hidden md:block w-64 bg-white h-[calc(100vh-40px)] mt-[20px] ml-[20px] rounded-xl fixed top-0 left-0 shadow-lg">
        <div className="p-6">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Portal Web
          </h1>
        </div>
        
        <nav className="mt-4 px-3">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center p-3 rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                    }`}
                  >
                    <Icon
                      className={`h-5 w-5 mr-3 transition-colors ${
                        isActive ? 'text-blue-600' : 'text-gray-400 group-hover:text-blue-600'
                      }`}
                    />
                    <span className={`font-medium ${isActive ? 'font-semibold' : ''}`}>
                      {item.label}
                    </span>
                    {isActive && (
                      <div className="ml-auto w-1.5 h-5 bg-blue-600 rounded-full" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

// Componente de contenido dinámico
const Content: React.FC = () => {
  return (
    <div className="ml-0 md:ml-72 p-6">
      <Routes>
        <Route path="/" element={<PublicacionesAyuda />} />
        <Route path="/usuarios" element={<Usuarios/>} />
        <Route path="/publicaciones" element={<PublicacionesAyuda />} />
        <Route path="/registrar" element={<FormularioPublicacion />} />
      </Routes>
    </div>
  );
};

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <Content />
    </div>
  );
};

export default Layout;