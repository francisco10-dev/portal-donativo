import { MapContainer, TileLayer, Marker, Popup, LayersControl } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { getCategoriaMapIcon } from '../utils/category';
import Card from '../utils/card';
import { publicaciones } from '../publications/portal';

const Map = () => {
    return (
        <div className="m-4">
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

                {publicaciones.map((publicacion) => (
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
    );
}

export default Map;