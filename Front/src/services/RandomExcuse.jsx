import axios from './axios'

const RandomExcuse = async() => {
	try {
		const res = await axios.get("/excuse/random")
		return res.data;
	} catch(error) {
		console.error('Error fetching excuses', error);
		throw error;
	}
}

export default RandomExcuse
