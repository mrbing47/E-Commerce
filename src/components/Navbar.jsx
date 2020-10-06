import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";

export default function Navbar() {
	return (
		<div className="navbar">
			<NavLink to="/shop" className="nav-item">
				Shop
			</NavLink>
			<NavLink to="/cart" className="nav-item">
				Your Cart
			</NavLink>
			<NavLink to="/profile" className="nav-item">
				Profile
			</NavLink>
		</div>
	);
}
