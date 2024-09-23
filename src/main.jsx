// COMPONENTE APP: todas las aplicaciones de React parten del componente pcpal > APP | Main es el archivo principal que va a cargar app | Todos los componentes son FUNCIONES | TODOS LOS COMP EMPIEZAN POR MAYUS. | cada componente necesita su hoja por separado

import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');

//esto son objetos que React se encarga de convertir en HTML, realmente es JSX

createRoot(container).render(<App />);

// Importar rapido = final de la palabra > ctrl+ espacio, ARCHIVO DEBE ESTAR ABIERTO
