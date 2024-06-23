const router = require('express').Router();
const recController = require('../controller/rec.js')
 
router.post('/addRec', recController.addRec);
router.get('/getRecs', recController.getRecs);
router.get('/getRec', recController.getRec);
router.delete('/deleteRec/:_id',recController.deleteRec);


module.exports = router; 