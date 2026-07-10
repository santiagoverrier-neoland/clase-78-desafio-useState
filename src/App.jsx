import './App.css'
import Buscador from './components/Buscador'
import Galeria from './components/Galeria'

import { useState } from "react";

// VERSIÓN DOCENTE, EN DONDE VAMOS VIENDO QUE EL PADRE LE DEBE ENVIAR DATOS A SUS HIJOS PARA PODER RENDERIZAR CORRECTAMENTE (SIEMPRE es UNIDIRECCIONAL)

function App() {

	// El padre App, le enviará ésta información a su hijo "buscador" mediante "props"
	const [busqueda, setBusqueda] = useState("")


	return (
		<main className="app">
			<header className="encabezado">
			<span className="logo">♥</span>
			<div>
				<h1>Momentos</h1>
				<p>Una pequeña galería de grandes recuerdos</p>
			</div>
			</header>

			<Buscador 
				busqueda={busqueda}
				setBusqueda={setBusqueda}
			/>

			<Galeria 
				busqueda={busqueda}
			/>
		</main>
	)
}

export default App
