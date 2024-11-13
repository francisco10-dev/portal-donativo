import { useState } from 'react';
import Swal from 'sweetalert2'

const FormularioPublicacion = () => {
  const [titulo, setTitulo] = useState('');
  const [ubicacion, setUbicacion] = useState('');
  const [fecha, setFecha] = useState('');
  const [categoria, setCategoria] = useState<'alimentos' | 'ropa' | 'calzado' | ''>('');
  const [descripcion, setDescripcion] = useState('');
  const [detalles, setDetalles] = useState('');
  const [prioridad, setPrioridad] = useState<'alta' | 'media' | 'baja'>('media');
  const [position, setPosition] = useState<[number, number] | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!titulo || !ubicacion || !fecha || !categoria || !position) {
      return;
    }
    Swal.fire({
      title: "Registro guardado",
      text: "La información ha sido registrada con éxito!",
      icon: "success"
    });
    //onSubmit(nuevaPublicacion);
    resetForm();
  };

  const resetForm = () => {
    setTitulo('');
    setUbicacion('');
    setFecha('');
    setCategoria('');
    setDescripcion('');
    setDetalles('');
    setPrioridad('media');
    setPosition(null);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full mx-auto p-6 border rounded-lg shadow-lg space-y-5 min-h-[550px]">
      <h2 className="text-xl font-bold">Crear Publicación</h2> <hr />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6"> {/* 3 columnas en pantallas medianas o más grandes */}
        <div>
          <label className="block font-medium">Título</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            className="w-full p-2 border rounded-lg"
            placeholder='Título'
            required
          />
        </div>

        <div>
          <label className="block font-medium">Ubicación</label>
          <input
            type="text"
            value={ubicacion}
            onChange={(e) => setUbicacion(e.target.value)}
            className="w-full p-2 border rounded-lg"
            placeholder='Ubicación'
            required
          />
        </div>

        <div>
          <label className="block font-medium">Fecha</label>
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>

        <div>
          <label className="block font-medium">Categoría</label>
          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value as 'alimentos' | 'ropa' | 'calzado')}
            className="w-full p-2 border rounded-lg"
            required
          >
            <option value="">Selecciona una categoría</option>
            <option value="alimentos">Alimentos</option>
            <option value="ropa">Ropa</option>
            <option value="calzado">Calzado</option>
          </select>
        </div>

        <div>
          <label className="block font-medium">Descripción</label>
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            className="w-full p-2 border rounded-lg"
            placeholder='Descripción'
          />
        </div>

        <div>
          <label className="block font-medium">Detalles</label>
          <input
            type="text"
            value={detalles}
            onChange={(e) => setDetalles(e.target.value)}
            className="w-full p-2 border rounded-lg"
            placeholder='Detalles'
          />
        </div>

        <div>
          <label className="block font-medium">Prioridad</label>
          <select
            value={prioridad}
            onChange={(e) => setPrioridad(e.target.value as 'alta' | 'media' | 'baja')}
            className="w-full p-2 border rounded-lg"
          >
            <option value="alta">Alta</option>
            <option value="media">Media</option>
            <option value="baja">Baja</option>
          </select>
        </div>

        <div>
          <label className="block font-medium">Posición (Latitud y Longitud)</label>
          <input
            type="text"
            placeholder="Ejemplo: 10.265, -85.583"
            value={position ? `${position[0]}, ${position[1]}` : ''}
            onChange={(e) => {
              const [lat, lng] = e.target.value.split(',').map(Number);
              if (!isNaN(lat) && !isNaN(lng)) {
                setPosition([lat, lng]);
              }
            }}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
      </div>

      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg">
        Crear Publicación
      </button>
    </form>
  );
};

export default FormularioPublicacion;
