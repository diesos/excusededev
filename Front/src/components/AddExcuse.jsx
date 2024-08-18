import {useState} from 'react'
import PostExcuse from '../services/addExcuse'

const AddExcuse = () => {
	const [succesMessage, setSuccesMessage] = useState(null)
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
		};

		try{
			const response = PostExcuse(data);
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
		</>
	)
}
export default AddExcuse
