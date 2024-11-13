import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, LayersControl } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { getCategoriaMapIcon } from '../utils/category';
import Card, { Publicacion } from '../utils/card';

export const publicaciones: Publicacion[] = [
  {
    id: 1,
    titulo: "Alimentos",
    ubicacion: "Santa Cruz, Guanacaste",
    fecha: "11/10/2024",
    categoria: "alimentos",
    descripcion: "Se necesitan alimentos no perecederos y agua embotellada",
    detalles: "Liceo Santa Cruz de 9 AM a 6 PM",
    prioridad: "alta",
    position: [10.265011932147619, -85.5830017386428]// Coordenadas para mostrar en el mapa
  },
  {
    id: 2,
    titulo: "Ropa de invierno",
    ubicacion: "Liberia, Guanacaste",
    fecha: "8/11/2024",
    categoria: "ropa",
    descripcion: "Se requieren chamarras y cobijas nuevas o en buen estado",
    detalles: "Gimnasio Municipal de Liberia",
    prioridad: "media", 
    position: [10.629803273133705, -85.44026055667747]// Coordenadas para mostrar en el mapa
  },
  {
    id: 3,
    titulo: "Calzado para niños",
    ubicacion: "Liberia, Guanacaste",
    fecha: "7/11/2024",
    categoria: "calzado",
    descripcion: "Necesitamos zapatos para niños de 5-12 años, se agradece en buen estado",
    detalles: "Universidad Nacional",
    prioridad: "baja",
    position: [10.617707192437686, -85.45086010609266]// Coordenadas para mostrar en el mapa
  },
  {
      id: 4,
      titulo: "Ropa de invierno",
      ubicacion: "Liberia, Guanacaste",
      fecha: "8/11/2024",
      categoria: "ropa",
      descripcion: "Se requieren chamarras y cobijas nuevas o en buen estado",
      detalles: "Universidad de Costa Rica",
      prioridad: "media",
      position: [10.617441857148632, -85.45851439631062]// Coordenadas para mostrar en el mapa
  },
  {
      id: 5,
      titulo: "Calzado para niños",
      ubicacion: "Liberia, Guanacaste",
      fecha: "7/11/2024",
      categoria: "calzado",
      descripcion: "Necesitamos zapatos para niños de 5-12 años",
      detalles: "INA",
      prioridad: "baja",
      position: [10.620242545624375, -85.45629600980153]// Coordenadas para mostrar en el mapa
  }
];

const PublicacionesAyuda = () => {
    

  const [filtroCategoria, setFiltroCategoria] = useState('Todas las categorías');
  const [filtroUbicacion, setFiltroUbicacion] = useState('');
  const [busqueda, setBusqueda] = useState('');

  const publicacionesFiltradas = publicaciones.filter((pub) => {
    return (
      (!filtroCategoria || filtroCategoria === 'Todas las categorías' || pub.categoria === filtroCategoria.toLowerCase()) &&
      (!filtroUbicacion || pub.ubicacion.toLowerCase().includes(filtroUbicacion.toLowerCase())) &&
      (!busqueda || pub.titulo.toLowerCase().includes(busqueda.toLowerCase()) || pub.descripcion.toLowerCase().includes(busqueda.toLowerCase()))
    );
  });

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Publicaciones</h1><hr style={{marginBottom: 10}} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="relative">
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">🔍</span>
          <input
            type="text"
            placeholder="Buscar solicitudes..."
            className="pl-10 w-full p-2 border rounded-lg"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>

        <select className="p-2 border rounded-lg" value={filtroCategoria} onChange={(e) => setFiltroCategoria(e.target.value)}>
          <option>Todas las categorías</option>
          <option>Alimentos</option>
          <option>Ropa</option>
          <option>Calzado</option>
        </select>

        <input
          type="text"
          placeholder="Filtrar por ubicación"
          className="p-2 border rounded-lg"
          value={filtroUbicacion}
          onChange={(e) => setFiltroUbicacion(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {publicacionesFiltradas.map((publicacion) => (
          <Card publicacion={publicacion} key={publicacion.id} />
        ))}
      </div>

      <div className="mt-10">
        <MapContainer center={[10.265011932147619, -85.5830017386428]} zoom={12} style={{ height: '500px', width: '100%' }}>
          <LayersControl position="topright">
            <LayersControl.BaseLayer checked name="Mapa estándar">
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </LayersControl.BaseLayer>

            <LayersControl.BaseLayer name="Mapa satelital">
              <TileLayer
                url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href='https://opentopomap.org'>OpenTopoMap</a> contributors"
              />
            </LayersControl.BaseLayer>

            <LayersControl.BaseLayer name="Mapa en relieve">
              <TileLayer
                url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
                attribution="Map data: &copy; <a href='https://opentopomap.org'>OpenTopoMap</a> contributors"
              />
            </LayersControl.BaseLayer>
          </LayersControl>

          {publicacionesFiltradas.map((publicacion) => (
            <Marker
              title={publicacion.categoria}
              key={publicacion.id}
              position={publicacion.position as LatLngExpression}
              icon={getCategoriaMapIcon(publicacion.categoria)}
            >
              <Popup>
                <Card publicacion={publicacion} />
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default PublicacionesAyuda;
