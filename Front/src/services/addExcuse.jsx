import axios from './axios'

const addExcuse = async() => {
	try {
		const res = await axios.post("http://localhost:8000/excuse/create/")
		//TODO: Create service for posting new excuse.
	} catch(error) {
		console.error('Error fetching excuses', error);
		throw error;
	}
}

export default addExcuse
