const express = require("express");
const router = express.Router();
const productController = require("../controller/candy");


router.get('/userr/candy',productController.getProducts);
router.post('/userr/candy', productController.postProduct);
router.patch('/userr/candy/:id', productController.patchProduct);
router.delete('/userr/candy/:id', productController.deleteProduct);


module.exports = router;