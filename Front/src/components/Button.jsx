const ButtonGenerate = ({addExcuse, buttonTime, onClick}) => {

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
