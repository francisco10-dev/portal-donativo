import { divIcon } from "leaflet";

export const getCategoriaEmoji = (categoria: string) => {
    switch (categoria) {
      case 'alimentos':
        return '🍎';
      case 'ropa':
        return '👕';
      case 'calzado':
        return '👞';
      default:
        return '📦';
    }
};
  
export const getCategoriaMapIcon = (categoria: string) => {
    const iconContent = getCategoriaEmoji(categoria); // Usa la función anterior para obtener el emoji
    return divIcon({
      html: `<div style="font-size: 24px; line-height: 24px; text-align: center;">${iconContent}</div>`,
      className: 'custom-icon',
      iconSize: [30, 30],
    });
};

export const getPrioridadStyle = (prioridad: string) => {
    switch (prioridad) {
      case 'alta':
        return 'bg-red-100 text-red-800';
      case 'media':
        return 'bg-yellow-100 text-yellow-800';
      case 'baja':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
};