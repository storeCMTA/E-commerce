const router = require('express').Router();
const ProductsController = require('../controller/contoller.js')

 

router.post('/addProduct', ProductsController.addProduct)
router.get('/getProducts', ProductsController.getProducts)
router.patch('/updateProduct/:_id',ProductsController.updateProduct)
router.delete('/deleteProduct/:_id',ProductsController.deleteProduct)

module.exports = router;