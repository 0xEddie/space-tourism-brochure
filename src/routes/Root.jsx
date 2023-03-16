import { Header } from './Header';
import { Home } from './Home';

export default function Root() {
	return (
		<div className="page-layout">
			<a className="jump-to-content" href="#main">
				Skip to content
			</a>
			<Header />
			{/* TODO: Replace <Home> with <Outlet> */}
			<Home />
		</div>
	);
}
