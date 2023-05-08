const Vaccine = require('../Models/vaccineModel')

const newVaccine = async (req, res) => {
    let coronaVaccine = new Vaccine({
        receivingDate: req.body.receivingDate,
        manufacturer: req.body.manufacturer,
    })
    try {
        await coronaVaccine.save();
        res.status(200).json({ newVaccine: coronaVaccine });
    }
    catch (error) {
        res.status(400).send("cannot save new veccine: " + error.message)
    }
}

const findVaccineById = async (req, res) => {
    try {
        let vaccine = await Vaccine.findById(req.body.id)
        res.status(200).json({ getVaccineById: vaccine });
    }
    catch (error) {
        res.status(400).send("cannot find the vaccine: " + error.message)
    }
}

module.exports = { newVaccine, findVaccineById}