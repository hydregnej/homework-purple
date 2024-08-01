import './Title.css';

function Title({level = 1, children }) {
	const Tag = `h${level}`;

	return (
		<Tag className={`title-${level}`}>
			{children}
		</Tag>
	);
}

export default Title;
