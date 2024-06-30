import './Button.css';

function Button({children}) {
	return (
		<button className="btn search-button">
			{children}
		</button>
	);
}

export default Button;