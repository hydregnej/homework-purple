import './Button.css';

function Button({type = 'button', children}) {
	return (
		<button type={type} className="btn search-button">
			{children}
		</button>
	);
}

export default Button;