import axios from './axios'


const PostExcuse = async({data, setSuccesMessage,}) => {


	try {
		const res = await axios.post("http://localhost:8000/excuse/create/", data)
		setSuccesMessage(res.data.message);

	} catch(error) {
		console.error('Error fetching excuses', error);
		throw error;
	}

}

export default PostExcuse
