export default function Root() {
	return (
		<>
			<Header />
			<Home />
		</>
	);
}

function Header() {
	return (
		<header className="primary-header flex">
			<div>
				{/* wrap img in div, fixes flexbox issue */}
				<img
					src="/src/assets/shared/logo.svg"
					alt="space tourism logo"
					className="logo"
				/>
			</div>
			<nav>
				<ul className="primary-navigation underline-indicators flex">
					<li className="ff-sans-cond uppercase text-white letter-spacing-2">
						<a href="./#">
							<span>00</span>Home
						</a>
					</li>
					<li className="ff-sans-cond uppercase text-white letter-spacing-2">
						<a href="./#">
							<span>01</span>Destination
						</a>
					</li>
					<li className="ff-sans-cond uppercase text-white letter-spacing-2">
						<a href="./#">
							<span>02</span>Crew
						</a>
					</li>
					<li className="ff-sans-cond uppercase text-white letter-spacing-2">
						<a href="./#">
							<span>03</span>Technology
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

function Home() {
	return (
		<div className="grid-container grid-container--home">
			<main>
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
			</main>
			<div>
				<a
					href="#"
					className="large-button uppercase ff-serif text-dark bg-white"
				>
					Explore
				</a>
			</div>
		</div>
	);
}
