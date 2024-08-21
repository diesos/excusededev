const Excuse = require("../models/excuse.model");

const getExcuse = async (req, res) => {
  const { id } = req.params;
  try {
    const searchExcuse = await Excuse.findOne({ http_code: parseInt(id) });
    if (!searchExcuse) {
      return res.status(404).send("Pas d'excuse trouvée !");
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

const randomExcuse = async (req, res) => {
  try {
    // Trouver tous les excuses avec un http_code valide
    const validExcuses = await Excuse.find({ http_code: { $exists: true } });

    if (validExcuses.length === 0) {
      return res.status(404).send("Pas d'excuse trouvée !");
    }

    const validHttpCodes = validExcuses.map((excuse) => excuse.http_code);

    const randomIndex = Math.floor(Math.random() * validHttpCodes.length);
    const randomHttpCode = validHttpCodes[randomIndex];

    const randomExcuse = await Excuse.findOne({ http_code: randomHttpCode });

    res.status(200).send({
      success: true,
      message: "Excuse trouvée",
      data: randomExcuse,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Erreur lors de la recherche de l'excuse",
      error: error.message,
    });
  }
};

const postExcuse = async (req, res) => {
  try {
    const { tag, message } = req.body;
    if (!tag || !message) {
      return res.status(400).send("Les champs Tag et Message sont requis");
    }
    const lastExcuse = await Excuse.findOne().sort({ http_code: -1 });
    const nextHttpCode = lastExcuse ? lastExcuse.http_code + 1 : 700;

    const newExcuse = new Excuse({
      http_code: nextHttpCode,
      tag,
      message,
    });

    await newExcuse.save();
    res.status(201).send({
      success: true,
      message: "Excuse ajoutée avec succès",
      data: newExcuse,
    });
  } catch (error) {
    console.error("Error : ", error);
    res.status(500).send("Erreur lors de la création d'excuse.");
  }
};

module.exports = { getExcuse, randomExcuse, postExcuse };
