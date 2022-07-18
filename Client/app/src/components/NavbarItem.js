import React from 'react';

function NavbarItem({ title, key }) {
	return <li key={key}>{title}</li>;
}

export default NavbarItem;
