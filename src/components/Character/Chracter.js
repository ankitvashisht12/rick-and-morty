import React from 'react';
import StatusIndicator from '../StatusIndicator/StatusIndicator';

const Chracter = ({id, refer, name, status, species, image}) => {
	return (
		<div ref={refer} className='card rounded m-3 d-flex flex-row justify-content-between align-items-center' style={{width: '100%'}}>
			<div className='d-flex flex-row align-items-center' >
				<img src={image} alt='character' style={{width: '100px'}} className='rounded-circle p-3'/>
				<h3 className='p-3 fs-light'>{name}</h3>	
			</div>
			<div className='d-flex flex-row p-3'>
				<StatusIndicator status={status}/>
				<h3 >{status} - {species}</h3>
			</div>
	</div>
	)
};

export default Chracter
