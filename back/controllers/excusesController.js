const excuses = require("../excuses.json");
const fs = require("fs")

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

const postExcuse = async(req, res)=> {
	try {
	const data = fs.readFileSync("../excusestest.json") // Pour test.
	const object = JSON.parse(data);
	const length = object.length;
	const index = length > 0 ? data[length - 1].http_code : 700;
	const {tag, message} = req.body;
	if (!tag || !message){
		return res.status(400).send("Les champs Tag et Message sont requis");
	}
	const newData = {
			http_code: index + 1,
			tag: tag,
			message: message
		}
	const newData2 = object.push(newData)
	JSON.stringify(object)
	fs.writeFileSync("../excusestest.json", JSON.stringify(newData2, null, 2), (err) => {
		if(err) {
			throw(err)
		}
		console.log("Added with succes")
	})
	res.status(201).send({
		succes: true,
		message: "Excuse ajoutée avec succès",
		data: data
	})
	} catch(error) {
		console.error("Error : ", error);
		res.status(500).send("Error occured while trying to create excuse")
	}



}
module.exports = { getExcuse, randomExcuse, postExcuse};
