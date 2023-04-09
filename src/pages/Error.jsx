import { Link, useRouteError } from 'react-router-dom';
import './Error.css';

export default function Error() {
	const error = useRouteError();

	return (
		<main id="main" className="grid-container error-page">
			{/* TODO add styling to error msg */}
			<h1 className="ff-serif fs-800 uppercase text-accent letter-spacing-3">
				lost?
			</h1>

			<article className="description text-white">
				<h2 className="ff-sans fs-700">Unexpected error:</h2>
				<i className="text-white fs-500">
					{error.status} - {error.statusText}
				</i>
			</article>

			<Link
				to="/"
				className="large-button uppercase ff-serif text-dark bg-white"
			>
				Home
			</Link>
		</main>
	);
}
