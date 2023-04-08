import { useRouteError } from 'react-router-dom';
import './Error.css';

export default function Error() {
	const error = useRouteError();

	return (
		<main id="main" className="grid-container error-page">
			{/* TODO add styling to error msg */}
			<h1 className="ff-serif fs-800 uppercase text-accent">lost?</h1>
			<p className="description fs-500">
				Unexpected error:{' '}
				<i>
					{error.status} - {error.statusText}
				</i>
			</p>
		</main>
	);
}
