import React from 'react';
import './App.scss';

// Imported components and views
import Navbar from './components/Navbar';
import Home from './views/Home';

const App = () => (
	<div className='app'>
		<Navbar />
		<Home />
	</div>
);

export default App;