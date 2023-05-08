const Address = require('../Models/addressModel')

const newAddress = async (req, res) => {
    let personalAddress = new Address({       
        city: req.body.city,
        street: req.body.street,
        number: req.body.number,
    }).populate()
    try {
        await personalAddress.save();
        res.status(200).json({ newAddress: personalAddress });
    }
    catch (error) {
        res.status(400).send("cannot save new address: " + error.message)
    }
}

const findAddressById = async (req, res) => {
    try {
        let address = await Address.findById(req.body.id)
        res.status(200).json({ getAddressById: address });
    }
    catch (error) {
        res.status(400).send("cannot find the address: " + error.message)
    }
}

module.exports = { newAddress, findAddressById }