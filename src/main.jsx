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

// TODO: create error page

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		// errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: '/destination',
				element: <Destination />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
