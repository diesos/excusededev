const ButtonGenerate = ({addExcuse, buttonTime, onClick}) => {

	return (
		<>
		{buttonTime && !addExcuse &&
          (<button className="generate-btn" onClick={addExcuse ? null: onClick}>
            Generate an Excuse
          </button>
		  )
		}
		</>)
}

export default ButtonGenerate
