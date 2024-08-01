import './App.css';
import Button from './assets/components/Button/Button';
import Title from './assets/components/Title/Title';
import Text from './assets/components/Text/Text';

function App() {

	return (
		<>
			<Title level={1}>
        Поиск
			</Title>

			<Text>
      Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.
			</Text>

			<Button>
        Искать
			</Button>
		</>
	);
}

export default App;
