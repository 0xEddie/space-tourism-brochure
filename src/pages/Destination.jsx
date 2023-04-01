import './Destination.css';
import { useState } from 'react';
import { destinations } from '../data.json';

export default function Destination() {
	const [destinationId, setDestinationId] = useState(0);

	return (
		<main id="main" className="grid-container grid-container--dest flow">
			<h1 className="numbered-title">
				<span aria-hidden="true">02</span> Pick your destination
			</h1>

			<picture
				srcSet={destinations[destinationId].images.webp}
				type="image/webp"
			>
				<img
					src={destinations[destinationId].images.png}
					alt={destinations[destinationId].name}
				/>
			</picture>

			<div className="tab-list underline-indicators flex" role="tablist">
				<button
					role="tab"
					aria-selected={destinationId === 0}
					className="uppercase ff-sans-cond text-accent letter-spacing-2"
					type="button"
					onClick={() => setDestinationId(0)}
				>
					Moon
				</button>
				<button
					role="tab"
					aria-selected={destinationId === 1}
					className="uppercase ff-sans-cond text-accent letter-spacing-2"
					type="button"
					onClick={() => setDestinationId(1)}
				>
					Mars
				</button>
				<button
					role="tab"
					aria-selected={destinationId === 2}
					className="uppercase ff-sans-cond text-accent letter-spacing-2"
					type="button"
					onClick={() => setDestinationId(2)}
				>
					Europa
				</button>
				<button
					role="tab"
					aria-selected={destinationId === 3}
					className="uppercase ff-sans-cond text-accent letter-spacing-2"
					type="button"
					onClick={() => setDestinationId(3)}
				>
					Titan
				</button>
			</div>

			<article className="destination-info flow">
				<h2 className="ff-serif fs-800 uppercase">
					{destinations[destinationId].name}
				</h2>
				<p className="description">{destinations[destinationId].description}</p>

				<div className="travel-details flex">
					<div>
						<h4 className="ff-sans-cond fs-200 uppercase text-accent letter-spacing-2">
							avg. distance
						</h4>
						<p className="ff-serif uppercase">
							{destinations[destinationId].distance}
						</p>
					</div>
					<div>
						<h4 className="ff-sans-cond fs-200 uppercase text-accent letter-spacing-2">
							est. travel time
						</h4>
						<p className="ff-serif uppercase">
							{destinations[destinationId].travel}
						</p>
					</div>
				</div>
			</article>
		</main>
	);
}
