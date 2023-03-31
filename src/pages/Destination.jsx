import './Destination.css';

export default function Destination() {
	return (
		<main id="main" className="grid-container grid-container--dest flow">
			<h1 className="numbered-title">
				<span aria-hidden="true">02</span> Pick your destination
			</h1>

			<img src="/src/assets/destination/image-moon.png" alt="the moon" />

			<div className="tab-list underline-indicators flex" role="tablist">
				<button
					role="tab"
					aria-selected="true"
					className="uppercase ff-sans-cond text-accent letter-spacing-2"
					type="button"
				>
					Moon
				</button>
				<button
					role="tab"
					aria-selected="false"
					className="uppercase ff-sans-cond text-accent letter-spacing-2"
					type="button"
				>
					Mars
				</button>
				<button
					role="tab"
					aria-selected="false"
					className="uppercase ff-sans-cond text-accent letter-spacing-2"
					type="button"
				>
					Europa
				</button>
				<button
					role="tab"
					aria-selected="false"
					className="uppercase ff-sans-cond text-accent letter-spacing-2"
					type="button"
				>
					Titan
				</button>
			</div>

			<article className="destination-info">
				<h2 className="ff-serif fs-800 uppercase">Moon</h2>
				<p className="description">
					See our planet as you’ve never seen it before. A perfect relaxing trip
					away to help regain perspective and come back refreshed. While you’re
					there, take in some history by visiting the Luna 2 and Apollo 11
					landing sites.
				</p>

				<div className="travel-details flex">
					<div>
						<h4 className="ff-sans-cond fs-200 uppercase text-accent letter-spacing-2">
							avg. distance
						</h4>
						<p className="ff-serif uppercase">384,400 km</p>
					</div>
					<div>
						<h4 className="ff-sans-cond fs-200 uppercase text-accent letter-spacing-2">
							est. travel time
						</h4>
						<p className="ff-serif uppercase">3 days</p>
					</div>
				</div>
			</article>
		</main>
	);
}
