import "./App.css";
import NavBar from "../src/components/NavBar";
import Catalogue from "./components/Catalogue";
// import Affiche from "./components/Affiche";
import { useState } from "react";

function App() {
	const [categorie, setCategorie] = useState("tout");
	return (
		<>
			<header className="">
				<NavBar setCategorie={setCategorie} />
			</header>
			<main className="flex">
				<Catalogue categorie={categorie} />
				{/* <Affiche /> */}
			</main>
		</>
	);
}

export default App;
