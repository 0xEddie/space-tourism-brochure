import { useState } from 'react';
import './Technology.css';

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
					<p className="ff-serif fs-700 uppercase">Launch vehicle</p>
				</header>

				<p className="description">
					A launch vehicle or carrier rocket is a rocket-propelled vehicle used
					to carry a payload from Earth's surface to space, usually to Earth
					orbit or beyond. Our WEB-X carrier rocket is the most powerful in
					operation. Standing 150 metres tall, it's quite an awe-inspiring sight
					on the launch pad!
				</p>
			</article>

			<img
				className={imageClasses[tabNumber]}
				// src="/src/assets/technology/image-launch-vehicle-landscape.jpg"
				alt="launching vehicle"
			/>
		</main>
	);
}
