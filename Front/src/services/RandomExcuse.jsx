import axios from './axios'
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const RandomExcuse = async() => {
	try {
		const res = await axios.get(`${API_BASE_URL}/excuse/random/`)
		return res.data;
	} catch(error) {
		console.error('Error fetching excuses', error);
		throw error;
	}
}

export default RandomExcuse
