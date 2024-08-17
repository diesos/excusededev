import { TypeAnimation } from "react-type-animation"

const TextGen = (props) => {

	const {excuse, tag} = props

	return(
		<>
		<TypeAnimation
		sequence={[`Object: ${tag}`, 500]}
		wrapper="span"
		speed={70}
		style={{ marginTop: "2em", display: "inline-block" }}
		className="animated-text"
		key={tag}
	  />
				  <TypeAnimation
		sequence={[`Excuse:  ${excuse}`, 500]}
		wrapper="span"
		speed={60}
		style={{marginTop: "2em", display: "inline-block" }}
		className="animated-text"
		key={excuse}
	  />
	  </>
	)
}

export default TextGen
