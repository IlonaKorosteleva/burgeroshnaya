import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';
import PropTypes from 'prop-types';

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ModalOverlay } from '../ModalOverlay/ModalOverlay.component';

const modalRoot = document.getElementById('modal-root');

export const Modal = ({ children, title, onClose }) => {
	useEffect(() => {
		const handleEscapeKey = (event) => {
			if (event.key === 'Escape') {
				onClose();
			}
		};

		document.addEventListener('keydown', handleEscapeKey);
		return () => {
			document.removeEventListener('keydown', handleEscapeKey);
		};
	}, [onClose]);

	return ReactDOM.createPortal(
		<>
			<ModalOverlay onClose={onClose} />
			<div className={`${styles.modal} pb-15`}>
				<div
					className='mt-10 ml-10 mr-10'
					style={{
						height: '66px',
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}>
					<p className='text text_type_main-large'>{title}</p>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
						tabIndex={0}
						role='button'
						onClick={onClose}
						onKeyDown={(event) => {
							if (event.key === 'Enter' || event.key === ' ') {
								onClose();
							}
						}}>
						<CloseIcon type='primary' />
					</div>
				</div>

				{children}
			</div>
		</>,
		modalRoot
	);
};

Modal.propTypes = {
	children: PropTypes.node.isRequired,
	title: PropTypes.string,
	onClose: PropTypes.func.isRequired,
};
