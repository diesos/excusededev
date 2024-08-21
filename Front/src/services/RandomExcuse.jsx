import axios from './axios'
const API_BASE_URL = 'http://localhost:8000'

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
