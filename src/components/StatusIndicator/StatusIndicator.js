import React from 'react'

const StatusIndicator = ({ status }) => {
	let color = 'grey';

	switch (status.toLowerCase()) {
		case 'alive':
			color='green';	
			break;
		
		case 'unknown': 
			color='grey';
			break;

		case 'dead':
			color='red';
			break;
		
		default:
			color='yellow';
			break;
	}
	return (
		<div className='rounded-circle p-3 mx-3' style={{width: '10px', height: '10px', background: color}}> 
		</div>
	)
}

export default StatusIndicator
