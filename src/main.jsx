import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	BrowserRouter,
	Routes,
	Route,
} from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import './globals.scss';

ReactDOM.createRoot(
	document.getElementById('root')
).render(
	<BrowserRouter>
		<Routes>
			<Route
				path='/dashboard'
				element={<Dashboard />}
			/>
		</Routes>
	</BrowserRouter>
);
