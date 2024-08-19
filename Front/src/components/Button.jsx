import { CircularProgress } from "@mui/material"

const ButtonGenerate = ({addExcuse, buttonTime, onClick, circular}) => {

	return (
		<>
		{buttonTime && !addExcuse &&
          (<button className="generate-btn" onClick={addExcuse ? null: onClick}>
            Generate an Excuse{circular && (
                <div className="circular-progress">
                  <CircularProgress style={{alignItems: 'center'
                  }} />
                </div>
              )}
          </button>
		  )
		}
		</>)
}

export default ButtonGenerate
