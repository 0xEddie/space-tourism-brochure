import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css';
import './index.css';
import '@fontsource/barlow-condensed';
import '@fontsource/bellefair';
import '@fontsource/barlow';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root';
import { Home } from './routes/Home';

// TODO: create error page
// TODO: create, add Destination as child route

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		// errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: '/destination',
				element: <Root />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
