import './App.css';
import Button from './assets/components/Button/Button';
import Title1 from './assets/components/Title1/Title1';
import Text from './assets/components/Text/Text';

function App() {

	return (
		<>
			<Title1>
        Поиск
			</Title1>

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
