import { useRouteError } from 'react-router-dom';
import './Error.css';

export default function Error() {
	const error = useRouteError();

	return (
		<main id="main" className="error-page">
			{/* TODO add styling to error msg */}
			<h1>lost?</h1>
			<p>
				Unexpected error:{' '}
				<i>
					{error.status} - {error.statusText}
				</i>
			</p>
		</main>
	);
}
