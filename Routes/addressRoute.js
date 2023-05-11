const router=require('express').Router();
const address=require("../Controllers/addressController")

router.get('/findAddressById/:id',address.findAddressById);

module.exports=router;