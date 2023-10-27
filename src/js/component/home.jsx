import React from "react";

/// 4. Importar el componente
import Nav from "./nav.jsx";
import Jumbotron from "./jumbotron.jsx";
import Boton from "./boton.jsx";
/// 5. Utilizar componente

const Home = () => {
	return (
		<>
			<Nav />
			<Jumbotron />
			<h1 className="text-center mt-5">Hola Bienvenidos a React 123 ;)</h1>
			<Boton />
		</>	
	);
};

export default Home;
