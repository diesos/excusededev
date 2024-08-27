import {useState} from 'react'
// import PostExcuse from '../services/addExcuse'
import axios from 'axios'
import { Link } from 'react-router-dom'

const AddExcuse = () => {
	const [succesMessage, setSuccesMessage] = useState(null)
	const [errorMessage, setErrorMessage] = useState(null)
	const [excuse, setExcuse] = useState(null)
	const [validTag, setValidTag] = useState(false)
	const [validMessage, setValidMessage] = useState(false)
	const [infoMsg, setInfoMsg] = useState('')
	const [infoMsg2, setInfoMsg2] = useState('')


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
		lenChecker()
	}


	const tagLen = formData.tag.length
	const messageLen = formData.message.length

	const lenChecker = () => {


		if (tagLen > 2){
			setValidTag(true);
			setInfoMsg("")
		}
		else {
			setValidTag(false)
			setInfoMsg("4 caractères minimum")
		}
		if (messageLen > 2)
		{
			setValidMessage(true)
			setInfoMsg2("")
		}
		else {
			setValidMessage(false)
			setInfoMsg2("4 caractères minimum")
		}

	}
	console.log(formData)
	console.log(tagLen)
	console.log(messageLen)
	console.log(validTag)
	console.log(validMessage)
	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = {
			tag: formData.tag,
			message: formData.message,
		}
		console.log("handleSubmit")
		try{
				const res = await axios.post("https://excusededev.onrender.com/excuse/create", data)
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
		<p style={{color: 'red'}}>{infoMsg}</p>
	<input
		type="text"
		id="id"
		name="tag"
		value={formData.tag}
		onChange={handleChange}
	/>
		<label  htmlFor="message">Ajouter une excuse</label>
		<p style={{color: 'red'}}>{infoMsg2}</p>

	<input
		type="text"
		id="id2"
		name="message"
		value={formData.message}
		onChange={handleChange}
	/>
		<button disabled={!validMessage || !validTag ? true : false}>
			Ajouter une excuse
		</button>
		</form>
		{succesMessage &&
		(<>
			<p style={{color: "green"}}>{succesMessage}</p>
			<p>http_code: {excuse.http_code}</p>
			<p>Titre: {excuse.tag}</p>
			<p>Excuse: {excuse.message}</p>

			<Link to={`/${excuse.http_code}`}><button>Accéder à l'excuse</button></Link>
		</>
		)}

		{!succesMessage && errorMessage && (
			<>
			<p key={errorMessage} style={{color: "red"}}>Erreur : {errorMessage}</p>
		</>
		)
		}

	</div>
	)
}
export default AddExcuse
