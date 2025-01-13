import data from "../assets/data/movieItems.json";
import Movie from "./Movie";

interface CatalogueProps {
	categorie: string;
}

export default function Catalogue({ categorie }: CatalogueProps) {
	const movieItems = data;

	const filterMovies = movieItems.filter((movie) => {
		if (categorie === "tout") return true;
		return movie.categorie === categorie;
	});

	return (
		<section className="flex flex-wrap justify-around rounded-md gap-4  ">
			{filterMovies.map(({ id, movieImg, name, categorie }) => (
				<Movie
					key={id}
					id={id}
					movieImg={movieImg}
					name={name}
					categorie={categorie}
				/>
			))}
		</section>
	);
}
