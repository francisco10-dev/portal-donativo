import { ArrowRight, Heart, Users, AlertTriangle } from 'lucide-react';
import Map from '../map/map';

interface LandingPageProps {
    onVisit: () => void;
}

const LandingPage = ({onVisit}: LandingPageProps) => {


    // Función para manejar la navegación
    const handleNavigate = () => {
        onVisit(); // Cambia el estado para mostrar Sidebar y Content
    };

  return (
    <div data-aos="fade-in" className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section - Ajustes más finos para responsividad */}
      <div className="relative overflow-hidden h-screen">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Contenido sobre el video - Mejor manejo del espaciado */}
        <div className="relative z-10 h-full flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center py-8 sm:py-12 md:py-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                Uniendo Comunidades
                <br />
                <span className="text-blue-200">Construyendo Esperanza</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Conectamos a personas y organizaciones para brindar ayuda efectiva en momentos de necesidad
              </p>
              <button onClick={()=> handleNavigate()} className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 text-base sm:text-lg font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                Visitar
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 sm:py-20 bg-white" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center p-6 rounded-xl bg-blue-50 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ayuda Directa</h3>
              <p className="text-gray-600">Conectamos directamente a quienes necesitan ayuda con personas dispuestas a colaborar</p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-blue-50 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
                <AlertTriangle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Respuesta Rápida</h3>
              <p className="text-gray-600">Facilitamos la coordinación inmediata en situaciones de emergencia y desastres naturales</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-blue-50 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Comunidad Unida</h3>
              <p className="text-gray-600">Fortalecemos los lazos comunitarios para crear una red de apoyo sostenible</p>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="py-16 sm:py-20 bg-gradient-to-b from-white to-blue-50" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12 sm:mb-16">Juntos Podemos Hacer la Diferencia</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "1000+", label: "Voluntarios" },
              { number: "50+", label: "Comunidades" },
              { number: "200+", label: "Proyectos" },
              { number: "5000+", label: "Personas Ayudadas" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6">
                <p className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

        <Map />

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg mb-4">¿Listo para hacer la diferencia en tu comunidad?</p>
          <button onClick={()=> handleNavigate()} className="group inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-blue-900 bg-white rounded-full hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
            Visitar
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <div className="mt-8 text-sm text-gray-300">
            © 2024 Todos los derechos reservados
          </div>
          <div className="mt-2 text-sm text-gray-300">
            Proyecto desarrollado para el curso EIF410 Informática y Sociedad
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;