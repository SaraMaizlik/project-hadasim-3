const Vaccine = require('../Models/vaccineModel')

const addVaccines = async (prop) => {
    let vaccinearr = []
    let coronaVaccine1 = new Vaccine({
        receivingDate: prop.receivingDate1,
        manufacturer: prop.manufacturer1,
    })
    let coronaVaccine2 = new Vaccine({
        receivingDate: prop.receivingDate2,
        manufacturer: prop.manufacturer2,
    })
    let coronaVaccine3 = new Vaccine({
        receivingDate: prop.receivingDate3,
        manufacturer: prop.manufacturer3,
    })
    let coronaVaccine4 = new Vaccine({
        receivingDate: prop.receivingDate4,
        manufacturer: prop.manufacturer4,
    })
    try {
        await coronaVaccine1.save();
        vaccinearr.push(coronaVaccine1);
        await coronaVaccine2.save();
        vaccinearr.push(coronaVaccine2);
        await coronaVaccine3.save();
        vaccinearr.push(coronaVaccine3);
        await coronaVaccine4.save();
        vaccinearr.push(coronaVaccine4);
    }
    catch (error) {
        return (null)
    }
    return vaccinearr;
}

const findVaccineById = async (req, res) => {
    try {
        let vaccine = await Vaccine.findById(req.body.id)
        res.json({ getVaccineById: vaccine });
    }
    catch (error) {
        res.send("cannot find the vaccine: " + error.message)
    }
}

module.exports = { addVaccines, findVaccineById }