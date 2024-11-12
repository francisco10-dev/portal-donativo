import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormularioPublicacion from './components/form';
import PublicacionesAyuda from './components/portal';

const App = () => {

  return (
    <Router>
      <div className="container mx-auto p-6">
        <Routes>
          {/* Ruta para registrar una nueva publicación */}
          <Route
            path="/registrar"
            element={<FormularioPublicacion/>}
          />
          {/* Ruta para ver las publicaciones */}
          <Route
            path="/publicaciones"
            element={<PublicacionesAyuda/>}
          />
          {/* Ruta raíz, redirigir a la página de ver publicaciones */}
          <Route
            path="/"
            element={<PublicacionesAyuda/>}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
