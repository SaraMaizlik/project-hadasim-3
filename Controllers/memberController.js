const Member = require('../Models/memberModel')

const newMember = async (req, res) => {
    let HMOmember = new Member({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        personalID: req.body.personalID,
        address: req.body.address,
        birthDate: req.body.birthDate,
        phone: req.body.phone,
        cellPhone: req.body.cellPhone,
        vaccine: req.body.vaccine,//? לא חייב
        positiveAndRecoveryDate: req.body.positiveAndRecoveryDate//?לא חייב
    }).populate()
    try {
        await HMOmember.save();
        res.status(200).json({ newMember: HMOmember });
    }
    catch (error) {
        res.status(400).send("cannot save new member: " + error.message)
    }
}

const findMemberById = async (req, res) => {
    try {
        let member = await Member.findById(req.body.personalID)
        res.status(200).json({ getMemberById: member });
    }
    catch (error) {
        res.status(400).send("cannot find the member: " + error.message)
    }
}

const getAllMembers = (req, res) => {
    Member.find().then((members) => {
        res.status(205).json({ getAllmembers: members })
    }).catch((err) => {
        res.status(400).send("cannot find the member list: " + error.message)
    })
}

module.exports = { newMember, findMemberById, getAllMembers}