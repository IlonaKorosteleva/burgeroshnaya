import {
	Button,
	ConstructorElement,
	CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './BurgerConstructor.module.css';
import { Modal } from '../Modal';
import { OrderDetails } from './components';
import { useState } from 'react';
export const BurgerConstructor = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpenModal = () => {
		setIsOpen(true);
	};

	const handleCloseModal = () => {
		setIsOpen(false);
	};
	return (
		<>
			{' '}
			{isOpen && (
				<Modal title='' onClose={handleCloseModal}>
					<OrderDetails />
				</Modal>
			)}
			<div className='pl-4 pr-4'>
				<div
					style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
					className={`${styles.burgerConstructor_container} mt-25`}>
					<ConstructorElement
						type='top'
						isLocked={true}
						text='Краторная булка N-200i (верх)'
						price={200}
						thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
					/>
					<ConstructorElement
						text='Краторная булка N-200i (верх)'
						price={50}
						thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
					/>
					<ConstructorElement
						text='Биокотлета из марсианской Магнолии'
						price={424}
						thumbnail={'https://code.s3.yandex.net/react/code/meat-01.png'}
					/>
					<ConstructorElement
						text='Краторная булка N-200i (верх)'
						price={50}
						thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
					/>
					<ConstructorElement
						type='bottom'
						isLocked={true}
						text='Краторная булка N-200i (низ)'
						price={200}
						thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
					/>
				</div>
				<div className={styles.burgerConstructor__total}>
					<p className='text text_type_digits-medium'>
						620 <CurrencyIcon type='primary' />
					</p>{' '}
					<Button
						htmlType='button'
						type='primary'
						size='medium'
						onClick={handleOpenModal}>
						Оформи заказ
					</Button>
				</div>
			</div>
		</>
	);
};
