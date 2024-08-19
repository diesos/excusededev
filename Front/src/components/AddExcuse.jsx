import {useState} from 'react'
// import PostExcuse from '../services/addExcuse'
import axios from 'axios'
import { green } from '@mui/material/colors'

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
				setSuccesMessage(res.data.message );
				setExcuse(res.data.data)

			} catch(error) {
				console.error('Error fetching excuses', error);
				if (error.response)
					setErrorMessage(error.response.data || "Une erreur est survenu")
				else if (error.request)
					setErrorMessage("Network Error: Le serveur est injoignable.")
				else
					(error.message)
				throw error;
			}
	}

	return (
		<div className="addexcuse-form">
	<form style={{marginTop: '20px'}}
	onSubmit={handleSubmit}>
		<label htmlFor="tag">Ajouter un titre à votre excuse</label>
	<input
		type="text"
		id="id"
		name="tag"
		value={formData.tag}
		onChange={handleChange}
	/>
		<label  htmlFor="message">Ajouter une excuse</label>
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
		<p style={{color: "green"}}>{succesMessage}</p>
		<p>http_code: {excuse.http_code}</p>
		<p>Titre: {excuse.tag}</p>
		<p>Excuse: {excuse.message}</p>
		</>)}

		{!succesMessage && errorMessage && (
			<>
			<p key={errorMessage} style={{color: "red"}}>Error : {errorMessage}</p>
		</>
		)
		}

	</div>
	)
}
export default AddExcuse
