import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CharacterDetailPage from "./pages/CharacterDetailPage.jsx";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/detail/:id" element={<CharacterDetailPage />} />
			</Routes>
		</Router>
	);
}

export default App;
