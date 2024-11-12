import React, { useEffect, useState } from 'react';

// Componente para mostrar los usuarios
const Usuarios: React.FC = () => {
  const [usuarios, setUsuarios] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>(''); // Estado para el buscador
  const [filteredUsuarios, setFilteredUsuarios] = useState<any[]>([]); // Estado para los usuarios filtrados

  // Obtener datos aleatorios de usuarios y fotos
  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=10');
        const data = await response.json();
        setUsuarios(data.results);
      } catch (error) {
        console.error("Error al obtener los usuarios:", error);
      }
    };
    fetchUsuarios();
  }, []);

  // Filtrar usuarios según la búsqueda
  useEffect(() => {
    const filtered = usuarios.filter((usuario) => {
      const query = searchQuery.toLowerCase();
      return (
        usuario.name.first.toLowerCase().includes(query) ||
        usuario.name.last.toLowerCase().includes(query) ||
        usuario.email.toLowerCase().includes(query) ||
        usuario.phone.toLowerCase().includes(query) ||
        usuario.location.city.toLowerCase().includes(query) ||
        usuario.location.country.toLowerCase().includes(query)
      );
    });
    setFilteredUsuarios(filtered);
  }, [searchQuery, usuarios]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Usuarios del Sistema</h2><hr style={{marginBottom: 10}} />

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
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
              <div className="relative">
                <img 
                  className="w-full h-48 object-cover" 
                  src={usuario.picture.large} 
                  alt="Foto de usuario"
                />
                <div className="absolute top-2 left-2 bg-blue-600 text-white py-1 px-3 rounded-full text-xs">
                  {usuario.gender === 'male' ? 'Masculino' : 'Femenino'}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{`${usuario.name.first} ${usuario.name.last}`}</h3>
                <p className="text-gray-600 mt-2">{usuario.email}</p>
                <p className="text-gray-600">{usuario.phone}</p>
                <p className="text-gray-600">{usuario.location.city}, {usuario.location.country}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">No se encontraron resultados</div>
        )}
      </div>
    </div>
  );
};

export default Usuarios;
