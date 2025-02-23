import { CheckMarkIcon } from '../../../CheckMarkIcon';
import styles from './OrderDetails.module.css';
export const OrderDetails = () => {
	return (
		<div className={styles.orderDetails_container}>
			<p className='text text_type_digits-large'>034536</p>
			<p className='text text_type_main-medium mt-8 mb-15'>
				Идентификатор заказа
			</p>
			<CheckMarkIcon />
			<p className='text text_type_main-default mt-15'>
				Ваш заказ начали готовить
			</p>
			<p className='text text_type_main-default text_color_inactive mt-2 mb-15'>
				Дождитесь готовности на орбитальной станции
			</p>
		</div>
	);
};
