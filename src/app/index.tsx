import { useEffect, useState } from 'react';
import { AppHeader, BurgerConstructor, BurgerIngredients } from '../components';
import styles from './App.module.css';
export const App = () => {
	const [ingredients, setIngredients] = useState([]);
	useEffect(() => {
		fetch('https://norma.nomoreparties.space/api/ingredients')
			.then((response) => {
				if (!response.ok) {
					throw new Error(`Ошибка ${response.status}`);
				}
				return response.json();
			})
			.then(({ data }) => {
				setIngredients(data);
			})
			.catch((error) => console.error('Ошибка загрузки:', error));
	}, []);

	return (
		<>
			<AppHeader />
			<main className={styles.container}>
				<section>
					<BurgerIngredients ingredients={ingredients} />
				</section>
				<section>
					<BurgerConstructor />
				</section>
			</main>
		</>
	);
};
