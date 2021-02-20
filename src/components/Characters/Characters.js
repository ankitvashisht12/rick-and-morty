import React, { useCallback, useRef } from 'react';
import Character from '../Character/Chracter';

const Characters = ({ characters, loading, error, more, pageNo, setPageNo }) => {
	
	const observer = useRef();

	
	const lastCharacter = useCallback(node => {
			if(loading) return ;
			if(observer.current) observer.current.disconnect();
			
			observer.current = new IntersectionObserver(entries => {

				if(entries[0].isIntersecting && more){
					console.log('calling setpage')
					setPageNo(prevPageNo => prevPageNo + 1);
				}

			})

			if(node) observer.current.observe(node);
		},
		[loading, more],
	)

	const characterList = characters.map((character, idx) => { 
		if(characters.length === idx + 1)
			return (
				<Character key={character.id} 
					refer={lastCharacter}
					id={character.id}
					name={character.name}
					status={character.status}
					species={character.species}
					image={character.image}
					location={character.location.name}
					origin={character.origin.name}
					gender={character.gender}/>
			);
						
	return (
		<Character key={character.id} 
			id={character.id}
			name={character.name}
			status={character.status}
			species={character.species}
			image={character.image}
			location={character.location.name}
			origin={character.origin.name}
			gender={character.gender}/>);
	});


	return (
		<>
			{characterList} 
		</>
		);
	
}

export default Characters
