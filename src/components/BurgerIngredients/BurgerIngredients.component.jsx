import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import styles from './BurgerIngredients.module.css';
import { IngredientsList } from './components';
export const BurgerIngredients = ({ ingredients }) => {
	const [current, setCurrent] = useState('Булки');
	const bunsRef = useRef(null);
	const saucesRef = useRef(null);
	const fillingsRef = useRef(null);

	const buns = ingredients.filter((item) => item.type === 'bun');
	const sauces = ingredients.filter((item) => item.type === 'sauce');
	const fillings = ingredients.filter((item) => item.type === 'main');
	const handleTabClick = (tab) => {
		setCurrent(tab);

		if (tab === 'Булки' && bunsRef.current) {
			bunsRef.current.scrollIntoView({ behavior: 'smooth' });
		} else if (tab === 'Соусы' && saucesRef.current) {
			saucesRef.current.scrollIntoView({ behavior: 'smooth' });
		} else if (tab === 'Начинки' && fillingsRef.current) {
			fillingsRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<>
			<p className='text text_type_main-large'>Собери бургер</p>
			<div style={{ display: 'flex' }} className='mt-5'>
				<Tab
					value='Булки'
					active={current === 'Булки'}
					onClick={() => handleTabClick('Булки')}>
					Булки
				</Tab>
				<Tab
					value='Соусы'
					active={current === 'Соусы'}
					onClick={() => handleTabClick('Соусы')}>
					Соусы
				</Tab>
				<Tab
					value='Начинки'
					active={current === 'Начинки'}
					onClick={() => handleTabClick('Начинки')}>
					Начинки
				</Tab>
			</div>
			<div className={`${styles.container} m-10`}>
				<p ref={bunsRef} className='text text_type_main-medium'>
					Булки
				</p>
				<IngredientsList ingredients={buns} />
				<p ref={saucesRef} className='text text_type_main-medium'>
					Соусы
				</p>
				<IngredientsList ingredients={sauces} />

				<p ref={fillingsRef} className='text text_type_main-medium'>
					Начинки
				</p>
				<IngredientsList ingredients={fillings} />
			</div>
		</>
	);
};

BurgerIngredients.propTypes = {
	ingredients: PropTypes.arrayOf(
		PropTypes.shape({
			_id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			type: PropTypes.oneOf(['bun', 'sauce', 'main']).isRequired,
			proteins: PropTypes.number.isRequired,
			fat: PropTypes.number.isRequired,
			carbohydrates: PropTypes.number.isRequired,
			calories: PropTypes.number.isRequired,
			price: PropTypes.number.isRequired,
			image: PropTypes.string.isRequired,
			image_mobile: PropTypes.string.isRequired,
			image_large: PropTypes.string.isRequired,
			__v: PropTypes.number.isRequired,
		})
	).isRequired,
};
