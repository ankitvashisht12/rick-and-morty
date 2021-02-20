import React from 'react'

const QuickViewDetails = ({detail, value}) => {
	return (
		<div className='d-flex flex-column mx-4 mb-4'>
			<h3 style={{color: 'grey'}}>{detail}</h3>	
			<h2>{value}</h2>	
		</div>
	)
}

export default QuickViewDetails
