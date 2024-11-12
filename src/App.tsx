import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormularioPublicacion from './components/form';
import PublicacionesAyuda from './components/portal';
import { useState } from 'react';
import { Publicacion } from './components/card';

const App = () => {
  const [publicaciones, setPublicaciones] = useState<Publicacion[]>([]);

  const agregarPublicacion = (nuevaPublicacion: Publicacion) => {
    setPublicaciones([...publicaciones, nuevaPublicacion]);
  };

  return (
    <Router>
      <div className="container mx-auto p-6">
        <Routes>
          {/* Ruta para registrar una nueva publicación */}
          <Route
            path="/registrar"
            element={<FormularioPublicacion onSubmit={agregarPublicacion} />}
          />
          {/* Ruta para ver las publicaciones */}
          <Route
            path="/publicaciones"
            element={<PublicacionesAyuda publicaciones={publicaciones} />}
          />
          {/* Ruta raíz, redirigir a la página de ver publicaciones */}
          <Route
            path="/"
            element={<PublicacionesAyuda publicaciones={publicaciones} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
