import { useEffect, useState } from "react";
import axios from "axios";
import { TypeAnimation } from "react-type-animation";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const ExcuseDetails = ({ id, excuse, setExcuse }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExcuse = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/excuse/${id}`);
        setExcuse(response.data.data);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };

    fetchExcuse();
  }, [id, setExcuse]);

  console.log(excuse);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (!excuse) {
    return <p>Pas d&apos;excuse trouvée !</p>;
  }

  return (
    <>
      <p>http_code: {excuse.http_code}</p>
      <TypeAnimation
        sequence={[`Object: ${excuse.tag}`, 500]}
        wrapper="span"
        speed={70}
        style={{ marginTop: "2em", display: "inline-block" }}
        className="animated-text"
        key={excuse.tag}
      />
      <TypeAnimation
        sequence={[`Excuse:  ${excuse.message}`, 500]}
        wrapper="span"
        speed={60}
        style={{ marginTop: "2em", display: "inline-block" }}
        className="animated-text"
        key={excuse.message}
      />
    </>
  );
};

export default ExcuseDetails;
