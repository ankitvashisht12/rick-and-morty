import React from 'react';
import Character from '../Character/Chracter';

const Characters = ({ characters, loading }) => {

	if(loading) return <h1>Loading...</h1>

	return (
		<>
			{ characters.map(character => {
					return (
						<Character key={characters.id} 
						id={character.id}
						name={character.name}
						status={character.status}
						species={character.species}
						image={character.image}/>
					);
				})
			} 
		</>
		);
	
}

export default Characters
