import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css';
import './index.css';
import '@fontsource/barlow-condensed';
import '@fontsource/bellefair';
import '@fontsource/barlow';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology';
import Error from './pages/Error';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		// TODO: create error page
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: '/destination',
				element: <Destination />,
			},
			{
				path: '/crew',
				element: <Crew />,
			},
			{
				path: '/technology',
				element: <Technology />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
