type MovieType = {
	id: number;
	name: string;
	movieImg: string;
	categorie: string;
};
export default function Movie({ movieImg, name }: MovieType) {
	return (
		<section className="m-8  transition ease-in-out delay-150  hover:-translate-y-2 ">
			<article className="flex flex-col items-center shadow-lg rounded-md bg-slate-50 ">
				<button type="button">
					<img src={movieImg} alt={name} className=" h-96 rounded-md " />
				</button>
				<h1 className="text-3xl font-bold pb-4 bg-slate-50">{name}</h1>
			</article>
		</section>
	);
}
