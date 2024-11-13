import React, { useEffect, useState } from 'react';

// Información quemada de usuarios
const usuariosData = [
  {
    nombre: 'Aaron',
    apellidos: 'Soto Quesada',
    telefono: '+506 8429 7456',
    correo: 'aaron.soto.quesada@est.una',
    direccion: 'Provincia de Guanacaste, Liberia, 25 de Julio',
    imagen: '/images/Aaron.png'
  },
  {
    nombre: 'Jordy',
    apellidos: 'Palacios',
    telefono: '+506 7083 4320',
    correo: 'dylan.brown@example.com',
    direccion: 'Provincia de Guanacaste, Liberia, La Guaria',
    imagen: '/images/Jordy.png'
  },
  /*{
    nombre: 'José',
    apellidos: 'Meza (El Boss)',
    telefono: '+506 6251 0443',
    correo: 'dylan.brown@example.com',
    direccion: 'Provincia de Alajuela, Upala',
    imagen: '/images/Meza.png'
  },
  {
    nombre: 'Bismarck',
    apellidos: 'Cuendis',
    telefono: '+506 6262 6131',
    correo: 'dylan.brown@example.com',
    direccion: 'Provincia de Puntarenas',
    imagen: '/images/Villa.png'
  },
  {
    nombre: 'Dylan',
    apellidos: 'Mejía',
    telefono: '+506 8325 3006',
    correo: 'dylan.brown@example.com',
    direccion: 'Provincia de Guanacaste, Liberia, Quebrada Grande',
    imagen: '/images/Dylan.png'
  },*/
  // Agrega más usuarios aquí según sea necesario
];

const Usuarios: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>(''); // Estado para el buscador
  const [filteredUsuarios, setFilteredUsuarios] = useState<any[]>(usuariosData); // Estado para los usuarios filtrados

  // Filtrar usuarios según la búsqueda
  useEffect(() => {
    const filtered = usuariosData.filter((usuario) => {
      const query = searchQuery.toLowerCase();
      return (
        usuario.nombre.toLowerCase().includes(query) ||
        usuario.apellidos.toLowerCase().includes(query) ||
        usuario.correo.toLowerCase().includes(query) ||
        usuario.telefono.toLowerCase().includes(query) ||
        usuario.direccion.toLowerCase().includes(query)
      );
    });
    setFilteredUsuarios(filtered);
  }, [searchQuery]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Usuarios del Sistema</h2>
      <hr style={{ marginBottom: 10 }} />

      {/* Campo de búsqueda */}
      <div className="mb-6 flex items-center">
        <input
          type="text"
          placeholder="Buscar por nombre, email, teléfono o dirección"
          className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Grid de tarjetas de usuario */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredUsuarios.length > 0 ? (
          filteredUsuarios.map((usuario, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative">
                <img
                  className="w-full h-48 object-cover"
                  src={usuario.imagen}
                  alt={`Foto de ${usuario.nombre}`}
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{`${usuario.nombre} ${usuario.apellidos}`}</h3>
                <p className="text-gray-600">{usuario.telefono}</p>
                <p className="text-gray-600">{usuario.direccion}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No se encontraron resultados
          </div>
        )}
      </div>
    </div>
  );
};

export default Usuarios;
