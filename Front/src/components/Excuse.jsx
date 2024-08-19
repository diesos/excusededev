import NavBar from "./NavBar";
import ExcuseDetails from "../services/ExcuseDetails";
import { useParams } from "react-router";
import { useState } from "react";
import { Link } from "react-router-dom";
import FourZeroFour from "./FourZeroFour";


const Excuse = () => {

	const [excuse, setExcuse] = useState(null)

	const {id} = useParams();



	console.log(excuse)

	if(location.pathname === '/*')
		return <FourZeroFour />

return (
    <>


    <NavBar
      />
    <div className="main-container">

      <div className="bubble shadow large" style={{display:"flex", flexDirection:'column', width:"100%", justifyContent:'center', left:"-30%", right:"50%	"}}>

	  <ExcuseDetails
	excuse={excuse}
	setExcuse={setExcuse}
	id={id}
	/>
		  <Link to='/'>
  <button className='generate-btn'>Go back to Home</button>
</Link>
      </div>
	  </div>

    </>
  );
};

export default Excuse;
