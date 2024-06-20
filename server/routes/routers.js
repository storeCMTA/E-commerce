const router = require('express').Router();
const ProductsController = require('../controller/contoller.js')
// const usercontroller = require('../controller/usercontroller.js')
const multer = require('multer');
const path = require('path');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/addProduct', upload.single('image'), ProductsController.addProduct);
router.get('/getProducts', ProductsController.getProducts);
router.get('/getProduct/:id', ProductsController.getProduct);
router.put('/updateProduct/:_id', upload.single('image'), ProductsController.updateProduct);
router.delete('/deleteProduct/:_id',ProductsController.deleteProduct);

module.exports = router; 