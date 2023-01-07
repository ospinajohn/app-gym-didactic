import { API_KEY } from './privateKey';

export const exerciseOptions  = {
	method: 'GET',
	headers: {
		// 'X-RapidAPI-Key': API_KEY,
		'X-RapidAPI-Key': '0033a8aee5mshd1f142c1a1c0598p17868ejsnd7c3b23d3716',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	},
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
		'X-RapidAPI-Key': '0033a8aee5mshd1f142c1a1c0598p17868ejsnd7c3b23d3716',
		'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
	}
};

export const fetchData = async (url, options) => {
	try {
		const response = await fetch(url, options);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};
