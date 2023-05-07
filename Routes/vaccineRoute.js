const router=require('express').Router();
const vaccine=require("../Controllers/vaccineController")

router.post('/newVaccine',vaccine.newVaccine);
router.get('/findVaccineById/:id',vaccine.findVaccineById);

module.exports=router;