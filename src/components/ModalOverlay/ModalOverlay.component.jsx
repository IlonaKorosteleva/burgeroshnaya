import styles from './ModalOverlay.module.css';
import PropTypes from 'prop-types';

export const ModalOverlay = ({ onClose }) => {
	const handleKeyDown = (event) => {
		if (event.key === 'Enter' || event.key === ' ') {
			onClose();
		}
	};

	return (
		<div
			className={styles.overlay}
			onClick={onClose}
			onKeyDown={handleKeyDown}
			role='button'
			tabIndex={0}
			aria-label='Закрыть модальное окно'></div>
	);
};

ModalOverlay.propTypes = {
	onClose: PropTypes.func.isRequired,
};
