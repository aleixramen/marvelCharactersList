import { URL_GET_CHARACTERS, URL_GET_CHARACTERS_PAGINATION } from "../constants/apiData";
import { useState, useEffect } from "react";
import logoMarvel from "../../public/Images/logo.png";
import "../styles/generalStyles.css";
import { Link } from "react-router-dom";

import { Container, Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";

const HomePage = () => {
	const [characters, setCharacters] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);
	const pageSize = 9;

	useEffect(() => {
		fetchCharacters();
	}, [currentPage]);

	useEffect(() => {
		fetchTotalPages();
		setCurrentPage(1);
	}, []);

	async function fetchCharacters() {
		const response = await fetch(URL_GET_CHARACTERS_PAGINATION(pageSize, currentPage));
		const data = await response.json();
		const charactersInfo = data.data.results;

		setCharacters(charactersInfo);
	}

	async function fetchTotalPages() {
		const response = await fetch(URL_GET_CHARACTERS);
		const data = await response.json();
		const totalCharacters = data.data.total;
		const calculatedTotalPages = Math.ceil(totalCharacters / pageSize);

		setTotalPages(calculatedTotalPages);
	}

	useEffect(() => {
		fetch(URL_GET_CHARACTERS)
			.then((response) => response.json())
			.then((data) => setCharacters(data.data.results));
	}, []);

	const goToPreviousPage = () => {
		setCurrentPage(currentPage - 1);
	};

	const goToNextPage = () => {
		setCurrentPage(currentPage + 1);
	};

	return (
		<>
			<Container className="header-card">
				<button>
					<img src={logoMarvel} alt="Logo and HomeButton" />
				</button>
				<Grid container spacing={3}>
					{characters.map((character) => {
						return (
							<Grid item xs={12} sm={6} md={4} key={character.id}>
								<Card>
									<CardMedia component="img" height="300" image={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
									<CardContent className="card-content">
										<Typography variant="h6" component="div" gutterBottom>
											{character.name}
										</Typography>
                                        {character.id && <Link to={`/detail/${character.id}`}>View Character</Link>}
									</CardContent>
								</Card>
							</Grid>
						);
					})}
				</Grid>
				<div>
					<button onClick={goToPreviousPage} disabled={currentPage === 1}>
						Previous
					</button>
					<span>Page {currentPage}</span>
					<button onClick={goToNextPage} disabled={currentPage === totalPages}>
						Next
					</button>
				</div>
			</Container>
		</>
	);
};

export default HomePage;
