import { useState, useEffect } from 'react';
import axios from 'axios';

const useCharactersSearch = (searchTerm, pageNo) => {
	const [loading, setLoading] = useState(true);
	const [characters, setCharacters] = useState([]);
	const [hasMore, setHasMore] = useState(true);
	const [hasError, setHasError] = useState(false);
	const [errorMsg, setErrorMsg] = useState('');


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


				const charactersData = response.data.results;
				const ch = []
				for(let i = 0; i < charactersData.length; i++){
					ch.push(charactersData[i])
				}
				setCharacters(characters => [...new Set([...characters, ...ch]) ]);

				setHasMore(response.data.info.next !== null);
				setLoading(false);
			} catch (err) {
				if(axios.isCancel(err)) return ;
				setHasError(true);
				setLoading(false);
				if(err.response.status === 404) setErrorMsg('No Character found !');
				else setErrorMsg('Something Went Wrong ! Try Again.')

			}
		}
		getCharactersData();

		// clean up function
		return () => {
			cancel();	
	};
	}, [searchTerm, pageNo]);


	return { loading, characters, hasMore, hasError, errorMsg };
}

export default useCharactersSearch;