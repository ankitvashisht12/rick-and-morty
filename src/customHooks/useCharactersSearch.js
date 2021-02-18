import { useState, useEffect } from 'react';
import axios from 'axios';

const useCharactersSearch = (searchTerm, pageNo) => {
	const [loading, setLoading] = useState(true);
	const [characters, setCharacters] = useState([]);
	const [hasMore, setHasMore] = useState(true);
	const [hasError, setHasError] = useState(false);


	useEffect(() => {
		setCharacters([]);
	}, [searchTerm]);

	useEffect(() => {

		setHasError(false);
		setLoading(true);

		let cancel;
		const getCharactersData = async () => {
			try{
				const response = await axios.get('/', {
					params: {
						name: searchTerm,
						page: pageNo
					},
					cancelToken: new axios.CancelToken(function executor(c) {
						cancel = c;
					}) 
				});

				console.log(response.data);
				
				const charactersData = response.data.results;
				const ch = []
				for(let i = 0; i < charactersData.length; i++){
					console.log(charactersData[i]);
					ch.push(charactersData[i])
				}
				console.log('ch' + ch)
				setCharacters(characters => [...new Set([...characters, ...ch]) ]);

				setHasMore(response.data.info.next !== null);
				setLoading(false);
			} catch (err) {
				if(axios.isCancel(err)) return ;
				console.log(err);
			}
		}
		getCharactersData();

		// clean up function
		return () => {
			cancel();	
			setHasError(true);
		};
	}, [searchTerm, pageNo]);


	return { loading, characters, hasMore, hasError };
}

export default useCharactersSearch;