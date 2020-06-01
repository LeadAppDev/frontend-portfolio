import React from 'react';
import './Navbar.scss';

const Navbar = () => (
	<div className='navbar'>
			<div className='navbar__content'>
				<h4 className='navbar__content__title'>Portfolio</h4>
				<span className='navbar__expander'></span>
				<button className='navbar__content__button'>
					Hello, I'm Available
				</button>
			</div>
	</div>
);

export default Navbar;