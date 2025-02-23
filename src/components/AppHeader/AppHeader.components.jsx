import {
	BurgerIcon,
	ListIcon,
	Logo,
	ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './AppHeader.module.css';

export const AppHeader = () => {
	return (
		<header>
			<nav className={styles.nav__container}>
				<div className={styles.nav__groupLeft}>
					<div className={styles.nav__link}>
						<a href='/constructor' className={styles.nav__link}>
							<BurgerIcon type='primary' />
							<p className='text text_type_main-default'>Конструктор</p>
						</a>
					</div>
					<a href='/lenta' className={styles.nav__link}>
						<ListIcon type='secondary' />
						<p className='text text_type_main-default text_color_inactive'>
							Лента заказов
						</p>
					</a>
				</div>
				<div className={styles.nav__logo}>
					<Logo />
				</div>
				<div className={styles.nav__groupRight}>
					<a href='/profile' className={styles.nav__link}>
						<ProfileIcon type='secondary' />
						<p className='text text_type_main-default text_color_inactive'>
							Личный кабинет
						</p>
					</a>
				</div>
			</nav>
		</header>
	);
};
