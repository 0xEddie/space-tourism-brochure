import { Outlet } from 'react-router-dom';
import Header from './Header';
import './Layout.css';

export default function Layout() {
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
