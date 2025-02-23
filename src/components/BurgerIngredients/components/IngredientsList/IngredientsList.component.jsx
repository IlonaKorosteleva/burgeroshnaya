import {
	Counter,
	CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './IngridientsList.module.css';
import PropTypes from 'prop-types';
import { Modal } from '../../../Modal/Modal.component';
import { useState } from 'react';
import { IngredientDetails } from '../IngredientDetails';
import { ingredientPropType } from '@utils/constants';

export const IngredientsList = ({ ingredients }) => {
	const [selectedIngredient, setSelectedIngredient] = useState(null);

	const handleOpenModal = (ingredient) => {
		setSelectedIngredient(ingredient);
	};

	const handleCloseModal = () => {
		setSelectedIngredient(null);
	};
	return (
		<div className={`${styles.ingredientsList} pt-6 pb-10 pl-4`}>
			{ingredients.map((ingredient) => (
				<div
					key={ingredient._id}
					role='button'
					tabIndex={0}
					className={styles.ingredient}
					onClick={() => handleOpenModal(ingredient)}
					onKeyDown={(event) => {
						if (event.key === 'Enter' || event.key === ' ') {
							handleOpenModal(ingredient);
						}
					}}
					aria-label={`Подробнее о ${ingredient.name}`}>
					<Counter count={1} size='default' extraClass='m-1' />
					<img src={ingredient.image} alt={ingredient.name} />
					<div className={styles.ingredient__info}>
						<p className='text text_type_digits-default'>{ingredient.price}</p>
						<CurrencyIcon type='primary' />
					</div>
					<p className='text text_type_main-default'>{ingredient.name}</p>
				</div>
			))}
			{selectedIngredient && (
				<Modal title='Детали ингредиента' onClose={handleCloseModal}>
					<IngredientDetails selectedIngredient={selectedIngredient} />
				</Modal>
			)}
		</div>
	);
};

IngredientsList.propTypes = {
	ingredients: PropTypes.arrayOf(ingredientPropType).isRequired,
};
