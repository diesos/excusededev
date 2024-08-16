const excuses = require("../excuses.json");

const getExcuse = async (req, res) => {
  const { id } = req.params;
  try {
    const searchExcuse = excuses.find(
      (excuse) => excuse.http_code === parseInt(id)
    );
    if (!searchExcuse) {
      return res.status(404).send("Nothing found !");
    }
    res.status(200).send({
      succes: true,
      message: "Excuse trouvé",
      data: searchExcuse,
    });
  } catch (error) {
    res.status(500).json({
      succes: false,
      message: "Aucune occurence trouvée",
      error: error.message,
    });
  }
};


const randomExcuse = async(req, res) => {
	// Filtre seulement les code http existante
	const validHttp = excuses.filter(excuses => excuses.http_code);
	//Si pas d'excuses, renvoyer erreur 404
	if (!validHttp){
		res.status(404).send("No excuses found.")
	}
	// Après avoir filtrer les http code existante, génération d'un randomIndex
	const randomIndex = Math.floor(Math.random() * validHttp.length);
	// Piochage du contenu
	const randomExcuse = validHttp[randomIndex];
	console.log(randomExcuse);
	try {
		const searchExcuseRandom = excuses.find(
		  (excuse) => excuse.http_code === parseInt(randomExcuse)
		);
		res.status(200).send({
		  succes: true,
		  message: "Excuse trouvé",
		  data: randomExcuse,
		});
	  } catch (error) {
		res.status(500).json({
		  succes: false,
		  message: "Aucune occurence trouvée",
		  error: error.message,
		});
	  }
}
module.exports = { getExcuse, randomExcuse };
