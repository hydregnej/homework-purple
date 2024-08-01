import './Text.css';

function Text({textSize = 'medium', color = 'light-gray', children}) {

	return (
		<p className={`text text-size-${textSize} text-color-${color}`}>
			{children}
		</p>
	);
}

export default Text;