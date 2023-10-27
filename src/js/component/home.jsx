import React from "react";

/// 4. Importar el componente
import Nav from "./nav.jsx";
/// 5. Utilizar componente

const Home = () => {
	return (
		<>
			<Nav />
			<h1 className="text-center mt-5">Hola Bienvenidos a React 123 ;)</h1>
		</>	
	);
};

export default Home;
