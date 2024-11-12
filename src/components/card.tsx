import 'leaflet/dist/leaflet.css';
import { getCategoriaEmoji, getPrioridadStyle } from './category';

export interface Publicacion {
    id: number;
    titulo: string;
    ubicacion: string;
    fecha: string;
    categoria: 'alimentos' | 'ropa' | 'calzado' | string; // Añadir tipos específicos según tus categorías
    descripcion: string;
    detalles: string;
    prioridad: 'alta' | 'media' | 'baja'; // Prioridades específicas
    position: [number, number]; // Coordenadas en latitud y longitud
};

// Definimos las props que el componente Card recibirá
interface CardProps {
    publicacion: Publicacion;
}
  
const Card = ({publicacion}:CardProps) => {
   return <>
        <div 
            key={publicacion.id} 
            className="bg-white rounded-lg shadow flex flex-col h-full"
        >
            <div className="p-6 flex-grow">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-semibold">
                {getCategoriaEmoji(publicacion.categoria)} {publicacion.titulo}
                </h2>
                <span className={`px-3 py-1 rounded-full text-sm ${getPrioridadStyle(publicacion.prioridad)}`}>
                  {publicacion.prioridad.charAt(0).toUpperCase() + publicacion.prioridad.slice(1)}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{publicacion.descripcion}</p>
              
              <div className="flex items-center text-gray-500 mb-2">
                <span className="mr-2">📍</span>
                <span>{publicacion.ubicacion}</span>
              </div>
              <div className="flex items-center text-gray-500 mb-4">
                <span className="mr-2">📅</span>
                <span>{publicacion.fecha}</span>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg mb-4">
                <p className="text-sm text-gray-600">{publicacion.detalles}</p>
              </div>
            </div>
            <div className="p-6 pt-0">
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Contactar
              </button>
            </div>
        </div>
    </>
}

export default Card;