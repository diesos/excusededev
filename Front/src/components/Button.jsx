const ButtonGenerate = ({addExcuse, buttonTime, onClick}) => {

	console.log(addExcuse);


	return (
		<>
		{buttonTime &&
          (<button className="generate-btn" onClick={addExcuse ? null: onClick}>
            {addExcuse ? "Add new Excuse" : "Generate an Excuse"}
          </button>
		  )
		}
		</>)
}

export default ButtonGenerate
