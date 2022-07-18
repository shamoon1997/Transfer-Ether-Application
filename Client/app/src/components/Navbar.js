import React from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import logo from '../images/logo.png';
import NavbarItem from './NavbarItem';
function Navbar() {
	return (
		<nav className="navBar">
			<div>
				<img src={logo} alt="logo" />
			</div>
			<div className="">
				<ul className="navBarList">
					{['Market', 'Exchange', 'Tutorial', 'Wallets', 'Login'].map(
						(item, index) => (
							<NavbarItem key={index} title={item} />
						)
					)}
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
