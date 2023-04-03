import './Crew.css';
import { useState } from 'react';
import { crew } from '../data.json';

export default function Crew() {
	const [crewId, setCrewId] = useState(0);

	return (
		<main id="main" className="grid-container grid-container--crew flow">
			<h1 className="numbered-title">
				<span aria-hidden="true">02</span> Meet your crew
			</h1>

			<div className="dot-indicators flex" role="tablist">
				<button
					aria-selected={crewId === 0}
					type="button"
					role="tab"
					onClick={() => setCrewId(0)}
				>
					<span className="sr-only">The commander</span>
				</button>
				<button
					aria-selected={crewId === 1}
					type="button"
					role="tab"
					onClick={() => setCrewId(1)}
				>
					<span className="sr-only">The mission specialist</span>
				</button>
				<button
					aria-selected={crewId === 2}
					type="button"
					role="tab"
					onClick={() => setCrewId(2)}
				>
					<span className="sr-only">The pilot</span>
				</button>
				<button
					aria-selected={crewId === 3}
					type="button"
					role="tab"
					onClick={() => setCrewId(3)}
				>
					<span className="sr-only">The flight engineer</span>
				</button>
			</div>

			<article className="crew-details">
				<header className="flow flow--space-small">
					<h2 className="fs-600 ff-serif uppercase">{crew[crewId].role}</h2>
					<p className="fs-700 uppercase ff-serif">{crew[crewId].name}</p>
				</header>
				<p className="description">{crew[crewId].bio}</p>
			</article>

			<picture srcSet={crew[crewId].images.webp} type="image/webp">
				<img src={crew[crewId].images.png} alt={crew[crewId].name} />
			</picture>
		</main>
	);
}
