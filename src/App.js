import React from 'react';

import './style.css';
import 'react-toastify/dist/ReactToastify.css';

import PageRoutes from './pageRoutes';
import { ToastContainer } from 'react-toastify';

export default function App() {
	return (
		<div className='app'>
			<PageRoutes />
			<ToastContainer autoClose={1500} />
		</div>
	);
}
