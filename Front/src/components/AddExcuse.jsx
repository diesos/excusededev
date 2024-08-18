import {useState} from 'react'
// import PostExcuse from '../services/addExcuse'
import axios from 'axios'

const AddExcuse = () => {
	const [succesMessage, setSuccesMessage] = useState(null)
	const [errorMessage, setErrorMessage] = useState(null)
	const [excuse, setExcuse] = useState(null)
	const [formData, setFormData] = useState({
		tag: "",
		message: ""
	})

	const handleChange = async (e) => {
		e.preventDefault();
        const { name, value } = e.target;
        setFormData({
			...formData,
            [name]: value
        })
	}
	console.log(formData)

	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = {
			tag: formData.tag,
			message: formData.message,
		}
		console.log("handleSubmit")
		try{
				const res = await axios.post("http://localhost:8000/excuse/create/", data)
				setSuccesMessage(res.data.message);
				setExcuse(res.data.data)

			} catch(error) {
				console.error('Error fetching excuses', error);
				setErrorMessage(res.data)
				throw error;
			}
	}

	return (
		<>
	<form
	onSubmit={handleSubmit}>
		<label style={{marginTop: '30px'}} htmlFor="tag">Ajouter un titre à votre excuse</label>
	<input
		type="text"
		id="id"
		name="tag"
		value={formData.tag}
		onChange={handleChange}
	/>
		<label style={{marginTop: '30px'}} htmlFor="message">Ajouter une excuse</label>
	<input
		type="text"
		id="id2"
		name="message"
		value={formData.message}
		onChange={handleChange}
	/>
		<button>
			Ajouter une excuse
		</button>
		</form>
		{succesMessage &&
		(<>
		<p>{succesMessage}</p>
		<p>Titre: {excuse.tag}</p>
		<p>Excuse: {excuse.message}</p>
		</>)}

		{errorMessage && (
			<>
			Error : {errorMessage}
		</>
		)
		}

	</>
	)
}
export default AddExcuse
