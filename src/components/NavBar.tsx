interface NavbarProps {
	setCategorie: (categorie: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setCategorie }) => {
	const handleClick = (categorie: string) => {
		setCategorie(categorie);
	};

	return (
		<nav className="bg-zinc-900 flex justify-center gap-7  p-8 text-2xl">
			<button
				type="button"
				onClick={() => handleClick("tout")}
				className="transition ease-in-out delay-150  hover:-translate-y-1  hover:bg-red-950 hover:text-white duration-300
                bg-slate-100 text-black rounded-md pe-8 ps-8"
			>
				FILM & SERIE
			</button>
			<button
				type="button"
				onClick={() => handleClick("film")}
				className="transition ease-in-out delay-150  hover:-translate-y-1  hover:bg-red-950 hover:text-white duration-300
                bg-slate-100 text-black rounded-md pe-8 ps-8"
			>
				FILM
			</button>
			<button
				type="button"
				onClick={() => handleClick("serie")}
				className="transition ease-in-out delay-150  hover:-translate-y-1  hover:bg-red-950 hover:text-white duration-300
                bg-slate-100 text-black rounded-md pe-8 ps-8"
			>
				SERIE
			</button>
		</nav>
	);
};
export default Navbar;
