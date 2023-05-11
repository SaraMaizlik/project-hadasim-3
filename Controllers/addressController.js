const Address = require('../Models/addressModel')

const addAddress = async (props) => {
    let personalAddress = new Address({
        city: props.city,
        street: props.street,
        houseNumber: props.houseNumber,
    })
    try {
        await personalAddress.save();
        return personalAddress;
    }
    catch (error) {
        return (null)
    }
}

const findAddressById = async (req, res) => {
    try {
        let address = await Address.findById(req.params.id)
        res.json({ getAddressById: address });
    }
    catch (error) {
        res.send("cannot find the address: " + error.message)
    }
}

module.exports = { addAddress, findAddressById }