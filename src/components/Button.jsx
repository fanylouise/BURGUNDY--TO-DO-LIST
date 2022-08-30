import React from "react";

import "./Button.css";

const Button = ({ children, onClick }) => {
	return (
		<button onClick={onClick} className="button" placeholder="Enter your task">
			{children}
		</button>
	);
};

export default Button