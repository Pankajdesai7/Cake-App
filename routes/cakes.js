const express=require('express');
const router=express.Router();

const cakeControllers=require('../controllers/cakes_controller');


router.get('/signature-cakes',cakeControllers.singnatureCakes);
router.get('/cheese-cakes',cakeControllers.cheeseCakes);






module.exports=router;