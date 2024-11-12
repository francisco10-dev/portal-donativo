import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { UsersIcon, CollectionIcon, ClipboardListIcon } from '@heroicons/react/outline';
import FormularioPublicacion from '../form';
import PublicacionesAyuda from '../portal';
import Usuarios from '../users/users';

// Componente del menú móvil (drawer)
const MobileMenu: React.FC<{ isOpen: boolean; toggleMenu: () => void }> = ({ isOpen, toggleMenu }) => {
  return (
    <div
      className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-50 transition-all duration-300 ease-in-out ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="flex flex-col items-center justify-center h-full">
        <Link
          to="/usuarios"
          className="text-white text-xl py-4 hover:bg-gray-700 w-full text-center"
          onClick={toggleMenu}
        >
          <UsersIcon className="h-5 w-5 mr-3 inline-block" />
          Usuarios
        </Link>
        <Link
          to="/publicaciones"
          className="text-white text-xl py-4 hover:bg-gray-700 w-full text-center"
          onClick={toggleMenu}
        >
          <CollectionIcon className="h-5 w-5 mr-3 inline-block" />
          Publicaciones
        </Link>
        <Link
          to="/registrar"
          className="text-white text-xl py-4 hover:bg-gray-700 w-full text-center"
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Botón de hamburguesa en pantallas pequeñas */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-4 text-white bg-gray-800 fixed top-4 left-4 z-50"
      >
        ☰
      </button>

      {/* Menú móvil tipo Drawer */}
      <MobileMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />

      {/* Contenido fijo en pantallas grandes */}
      <div className="hidden md:block w-64 bg-gray-800 text-white h-screen fixed top-0 left-0">
        <div className="p-4 text-2xl font-bold">Portal Web</div>
        <ul>
          <li>
            <Link to="/usuarios" className="flex items-center p-4 hover:bg-gray-700">
              <UsersIcon className="h-5 w-5 mr-3" />
              Usuarios
            </Link>
          </li>
          <li>
            <Link to="/publicaciones" className="flex items-center p-4 hover:bg-gray-700">
              <CollectionIcon className="h-5 w-5 mr-3" />
              Publicaciones
            </Link>
          </li>
          <li>
            <Link to="/registrar" className="flex items-center p-4 hover:bg-gray-700">
              <ClipboardListIcon className="h-5 w-5 mr-3" />
              Registrar
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

// Componente de contenido dinámico
const Content: React.FC = () => {
  return (
    <div className="ml-0 md:ml-64 p-4">
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
    <div>
      <Sidebar />
      <Content />
    </div>
  );
};

export default Layout;
