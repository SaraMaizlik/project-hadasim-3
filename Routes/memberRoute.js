const router=require('express').Router();
const member=require("../Controllers/memberController")

router.post('/newMember',member.newMember);
router.get('/findMemberById/:id',member.findMemberById);
router.get('/getAllMembers',member.getAllMembers);

module.exports=router;