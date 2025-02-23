import {
	Button,
	ConstructorElement,
	CurrencyIcon,
	DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './BurgerConstructor.module.css';
import { Modal } from '../Modal';
import { OrderDetails } from './components';
import { useState } from 'react';

const INGREDIENTS = [
	{
		_id: '1',
		name: 'Филе Люминесцентного тетраодона',
		price: 500,
		thumbnail: 'https://code.s3.yandex.net/react/code/meat-03.png',
		isLocked: true,
	},
	{
		_id: '2',
		name: 'Мясо бессмертных моллюсков Protostomia',
		price: 350,
		thumbnail: 'https://code.s3.yandex.net/react/code/meat-02.png',
		isLocked: true,
	},
	{
		_id: '3',
		name: 'Филе Люминесцентного тетраодона',
		price: 500,
		thumbnail: 'https://code.s3.yandex.net/react/code/meat-03.png',
		isLocked: false,
	},
	{
		_id: '4',
		name: 'Филе Люминесцентного тетраодона',
		price: 500,
		thumbnail: 'https://code.s3.yandex.net/react/code/meat-03.png',
		isLocked: false,
	},
	{
		_id: '5',
		name: 'Биокотлета из марсианской Магнолии',
		price: 424,
		thumbnail: 'https://code.s3.yandex.net/react/code/meat-01.png',
		isLocked: false,
	},
	{
		_id: '6',
		name: 'Биокотлета из марсианской Магнолии',
		price: 424,
		thumbnail: 'https://code.s3.yandex.net/react/code/meat-01.png',
		isLocked: false,
	},
	{
		_id: '7',
		name: 'Биокотлета из марсианской Магнолии',
		price: 424,
		thumbnail: 'https://code.s3.yandex.net/react/code/meat-01.png',
		isLocked: false,
	},
	{
		_id: '8',
		name: 'Биокотлета из марсианской Магнолии',
		price: 424,
		thumbnail: 'https://code.s3.yandex.net/react/code/meat-01.png',
		isLocked: false,
	},
];

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
				<div className={`${styles.burgerConstructor_container} mt-25`}>
					<div className={styles.burgerConstructor__wrapper}>
						<ConstructorElement
							type='top'
							isLocked={true}
							text='Краторная булка N-200i (верх)'
							price={200}
							thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
						/>
						<div className={styles.burgerConstructor__middle}>
							{INGREDIENTS.map((ingredient) => (
								<div
									key={ingredient._id}
									className={styles.burgerConstructor__middle_container}>
									<DragIcon type='primary' />
									<ConstructorElement
										isLocked={ingredient.isLocked}
										text={ingredient.name}
										price={ingredient.price}
										thumbnail={ingredient.thumbnail}
									/>
								</div>
							))}
						</div>
						<ConstructorElement
							type='bottom'
							isLocked={true}
							text='Краторная булка N-200i (низ)'
							price={200}
							thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
						/>
					</div>
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
