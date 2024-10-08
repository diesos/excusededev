import axios from './axios'
const API_BASE_URL = 'https://excusededev.onrender.com'
;


const PostExcuse = async({data, setSuccesMessage,}) => {


	try {
		const res = await axios.post(`${API_BASE_URL}/excuse/create/`, data)
		setSuccesMessage(res.data.message);

	} catch(error) {
		console.error('Error fetching excuses', error);
		throw error;
	}

}

export default PostExcuse
