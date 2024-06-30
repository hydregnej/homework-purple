import './Text.css';

function Text({children}) {
	return (
		<p className="text text-under-h1">
			{children}
		</p>
	);
}

export default Text;