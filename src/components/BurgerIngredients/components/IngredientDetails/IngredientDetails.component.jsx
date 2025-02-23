import { ingredientPropType } from '@utils/constants';
import styles from './IngredientDetails.module.css';

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
		ingredientPropType,
	},
};
