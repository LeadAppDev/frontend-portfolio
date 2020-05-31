import React from 'react';
import './Navbar.scss';

const Navbar = () => (
	<div className='navbar'>
			<div className='navbar__content'>
				<h4 className='navbar__content__title'>Portfolio</h4>
				<span className='navbar__expander'></span>
				<ul className='navbar__content__list-items'>
					<li>Home</li>
					<li>Bio</li>
					<li>Ambitions</li>
					<li>Contact</li>
				</ul>
			</div>
	</div>
);

export default Navbar;