const Vaccine = require('../Models/vaccineModel')

const addVaccines = async (prop1, prop2) => {
    let vaccinearr = []
    let coronaVaccine1 = new Vaccine({
        receivingDate: prop1.receivingDate1,
        manufacturer: prop2.manufacturer1,
    })
    let coronaVaccine2 = new Vaccine({
        receivingDate: prop1.receivingDate2,
        manufacturer: prop2.manufacturer2,
    })
    let coronaVaccine3 = new Vaccine({
        receivingDate: prop1.receivingDate3,
        manufacturer: prop2.manufacturer3,
    })
    let coronaVaccine4 = new Vaccine({
        receivingDate: prop1.receivingDate4,
        manufacturer: prop2.manufacturer4,
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