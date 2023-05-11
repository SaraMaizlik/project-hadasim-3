const router=require('express').Router();
const vaccine=require("../Controllers/vaccineController")

router.get('/findVaccineById/:id',vaccine.findVaccineById);

module.exports=router;