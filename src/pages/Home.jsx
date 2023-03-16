export default function Home() {
	return (
		<main className="grid-container grid-container--home" id="main">
			<div>
				<h1 className="ff-sans-cond fs-500 letter-spacing-3 uppercase">
					So, you want to travel to <br />
					<span className="ff-serif fs-900 text-white">space</span>
				</h1>
				<p>
					Let’s face it; if you want to go to space, you might as well genuinely
					go to outer space and not hover kind of on the edge of it. Well sit
					back, and relax because we’ll give you a truly out of this world
					experience!
				</p>
			</div>
			<div>
				{/* TODO refactor <a> to <Link> */}
				{/* TODO where does this link point to? */}
				<a
					href="#"
					className="large-button uppercase ff-serif text-dark bg-white"
				>
					Explore
				</a>
			</div>
		</main>
	);
}
