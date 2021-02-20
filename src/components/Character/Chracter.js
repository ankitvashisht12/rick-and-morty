import React, { useContext } from 'react';
import StatusIndicator from '../StatusIndicator/StatusIndicator';
import ModalContext from '../../context/ModalContext/ModalContext'
import classes from './Character.module.css';

const Chracter = ({id, refer, name, status, species, image, location, origin, gender}) => {
	
	const [modal, setModal] = useContext(ModalContext);

	const modalHandler = () => {
		const newModal = {...modal};
		newModal.showModal = !newModal.showModal
		newModal.character = {
			id,
			name,
			status,
			species,
			image,
			location,
			origin,
			gender
		}

		setModal(newModal);
	}


	return (
		<div 
			ref={refer} 
			onClick={modalHandler}
			className={`card rounded mb-1 d-flex flex-row justify-content-between align-items-center ${classes.container}`}>
			<div className='d-flex flex-row align-items-center' >
				<img src={image} alt='character' style={{width: '80px', height: '80px'}} className='rounded-circle p-3'/>
				<h2 className='p-3 fs-light'>{name}</h2>	
			</div>
			<div className='d-flex flex-row p-3 align-items-center'>
				<StatusIndicator status={status}/>
				<h3>{status} - {species}</h3>
			</div>
		</div>
	)
};

export default Chracter
