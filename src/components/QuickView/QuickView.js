import React, { useContext } from 'react';
import ModalContext from '../../context/ModalContext/ModalContext';
import Modal from 'react-bootstrap/Modal';
import StatusIndicator from '../StatusIndicator/StatusIndicator';
import QuickViewDetails from '../../ui-utils/QuickViewDetails/QuickViewDetails';

const QuickView = () => {

	const [modal, setModal] = useContext(ModalContext);

	const cancelModalHandler = () => {
		const newModal = {...modal};
		newModal.showModal = !newModal.showModal;
		newModal.character = {}
		setModal(newModal);
	}
	const character = modal.character;
	return (
		 <Modal dialogClassName="modal-90w" 
      aria-labelledby="contained-modal-title-vcenter"
      centered show={modal.showModal} onHide={cancelModalHandler}>
        <Modal.Header closeButton>Character Info</Modal.Header>
        <Modal.Body>
          	<div className='px-4'>
              <div className="d-flex flex-row"> 
                <img src={character.image} alt='character' style={{width: '130px', height: '130px'}} className='rounded-circle p-3'/>
                <div className='d-flex flex-column p-4'>
                  <h2 className='px-3 pb-2'><b>{character.name}</b></h2>
                  <div className='d-flex flex-row align-items-center'>
                    <StatusIndicator status={character.status}/>
                    <h3>{character.status} - {character.species}</h3>
                  </div>
                </div>
              </div>
              <hr />
              <div className='row d-flex justify-content-between'>
                <div className="column">
                  <QuickViewDetails detail='Gender' value={character.gender} />
                  <QuickViewDetails detail='Species' value={character.species} />
               </div>
               <div className="column">
                  <QuickViewDetails detail='Location' value={character.location} />
                  <QuickViewDetails detail='Origin' value={character.origin} />
               </div>
             </div>
           </div>
        </Modal.Body>
      </Modal>	
	)
}

export default QuickView 
