const Member = require('../Models/memberModel')
const {addAddress}=require('./addressController')
const {addVaccines} = require('./vaccineController')

const newMember = async (req, res) => {
    //console.log(req.body.manufacturer.manufacturer1)

    // add adress
    const addaddress= await addAddress(req.body.address)
    let userAddress;
    if(addaddress){
        userAddress=addaddress
    }

    // add vaccines
    const addvaccine= await addVaccines(req.body.vaccine, req.body.manufacturer)
    let userVaccines;
    if(addvaccine){
        userVaccines=addvaccine
    }

    // add member
    let HMOmember = new Member({
        firstName: req.body.member.firstName,
        lastName: req.body.member.lastName,
        personalID: req.body.member.personalID,
        address: userAddress,
        birthDate: req.body.member.birthDate,
        phone: req.body.member.phone,
        cellPhone: req.body.member.cellPhone,       
        vaccine: userVaccines,
        positiveDate: req.body.member.positiveDate,
        recoveryDate: req.body.member.recoveryDate,
    })
    try {
        await HMOmember.save();
        res.json({ newMember: HMOmember });
    }
    catch (error) {
        res.send("cannot save new member: " + error.message)
    }
}

const findMemberById = async (req, res) => {
    console.log("find by id");
    try {       
        let member = await Member.findOne({personalID:req.params.id}).populate("vaccine").populate("address")      
        res.json({ getMemberById: member });
    }
    catch (error) {
        res.send("cannot find the member: " + error.message)
    }
}

const getAllMembers = (req, res) => {
    Member.find().populate().then((members) => {
        res.json({ getAllmembers: members })
    }).catch((err) => {
        res.send("cannot find the member list: " + error.message)
    })
}

module.exports = { newMember, findMemberById, getAllMembers }