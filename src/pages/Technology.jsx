import { useState } from 'react';
import './Technology.css';
import { technology } from '../data.json';

export default function Technology() {
	const [tabNumber, setTabNumber] = useState(1);
	const imageClasses = {
		1: 'img-launch',
		2: 'img-port',
		3: 'img-capsule',
	};

	return (
		<main id="main" className="grid-container grid-container--tech flow">
			<h1 className="numbered-title">
				<span aria-hidden="true">03</span> Space Launch 101
			</h1>

			<div className="number-indicators flow row" role="tablist">
				<button
					aria-selected={tabNumber === 1}
					type="button"
					role="tab"
					onClick={() => setTabNumber(1)}
				>
					1
				</button>
				<button
					aria-selected={tabNumber === 2}
					type="button"
					role="tab"
					onClick={() => setTabNumber(2)}
				>
					2
				</button>
				<button
					aria-selected={tabNumber === 3}
					type="button"
					role="tab"
					onClick={() => setTabNumber(3)}
				>
					3
				</button>
			</div>

			<article className="tech-details">
				<header className="flow ">
					<h2 className="ff-sans-cond fs-300 text-accent letter-spacing-2 uppercase">
						The terminology...
					</h2>
					<p className="ff-serif fs-700 uppercase">
						{technology[tabNumber - 1].name}
					</p>
				</header>

				<p className="description">{technology[tabNumber - 1].description}</p>
			</article>

			<img className={imageClasses[tabNumber]} alt="launching vehicle" />
		</main>
	);
}
