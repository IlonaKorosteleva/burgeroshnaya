import styles from './IngredientDetails.module.css';
import PropTypes from 'prop-types';

export const IngredientDetails = ({ selectedIngredient }) => {
	return (
		<>
			<div className={styles.IngredientDetails_container}>
				<img
					src={selectedIngredient.image_large}
					alt={selectedIngredient.name}
				/>
				<p
					className='text text_type_main-medium mt-4'
					style={{ textAlign: 'center' }}>
					{selectedIngredient.name}
				</p>
				<div className={`${styles.IngredientDetails__info} mt-8`}>
					<div className={styles.IngredientDetails__parameter}>
						<p className='text text_type_main-small text_color_inactive'>
							Калории, ккал
						</p>
						<p className='text text_type_digits-default text_color_inactive'>
							{selectedIngredient.calories}
						</p>
					</div>
					<div className={styles.IngredientDetails__parameter}>
						<p className='text text_type_main-small text_color_inactive'>
							Белки, г
						</p>
						<p className='text text_type_digits-default text_color_inactive'>
							{selectedIngredient.proteins}
						</p>
					</div>
					<div className={styles.IngredientDetails__parameter}>
						<p className='text text_type_main-small text_color_inactive'>
							Жиры, г
						</p>
						<p className='text text_type_digits-default text_color_inactive'>
							{selectedIngredient.fat}
						</p>
					</div>
					<div className={styles.IngredientDetails__parameter}>
						<p className='text text_type_main-small text_color_inactive'>
							Углеводы, г
						</p>
						<p className='text text_type_digits-default text_color_inactive'>
							{selectedIngredient.carbohydrates}
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

IngredientDetails.propTypes = {
	ingredients: {
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
	},
};
