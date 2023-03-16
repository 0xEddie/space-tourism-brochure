import { Outlet } from 'react-router-dom';
import { Header } from './Header';

export default function Root() {
	return (
		<div className="page-layout">
			<a className="jump-to-content" href="#main">
				Skip to content
			</a>
			<Header />
			<Outlet />
		</div>
	);
}
