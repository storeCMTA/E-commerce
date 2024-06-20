const dataTables = require('../model/models.js')
const cloudinary = require('../cloudinaryConfig.js');

const getProducts = function (req, res) {
  dataTables.Product.find({})
    .then((items) => {
      res.status(200).send(items);
    })
    .catch((error) => { 
      res.status(500).send(error);
    });  
};
//returns an array
const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await dataTables.Product.findById(id).lean(); 
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addProduct = (req, res) => {
  if (!req.file) {
    return res.status(400).send('No image file provided');
  }

  cloudinary.uploader.upload_stream({ resource_type: 'image' }, (error, result) => {
    if (error) {
      return res.status(500).send(error);
    }

    const newProduct = new dataTables.Product({
      name: req.body.name,
      category: req.body.category,
      description: req.body.description,
      price: req.body.price,
      image: result.secure_url,
      quantity: req.body.quantity
    });

    newProduct.save()
      .then((product) => {
        res.status(200).send(product);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  }).end(req.file.buffer);
};
//returns the new object in an array


const deleteProduct = (req, res) => {
  dataTables.Product.findByIdAndDelete(req.params._id)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    })
}
//returns the deleted object


const updateProduct = (req, res) => {
  const updateData = {
    name: req.body.name,
    category: req.body.category,
    description: req.body.description,
    price: req.body.price,
    quantity: req.body.quantity,
  };

  if (req.file) {
    cloudinary.uploader.upload_stream({ resource_type: 'auto' }, (error, result) => {
      if (error) {
        return res.status(500).send(error);
      }
      updateData.image = result.secure_url;

      // Now update the product in your database
      dataTables.Product.findByIdAndUpdate(req.params._id, updateData, { new: true })
        .then((updatedProduct) => {
          if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
          }
          res.status(200).json(updatedProduct);
        })
        .catch((err) => {
          res.status(500).json({ message: err.message });
        });
    }).end(req.file.buffer);
  } else {
    dataTables.Product.findByIdAndUpdate(req.params._id, updateData, { new: true })
      .then((result) => {
        if (!result) {
          return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(500).json({ message: err.message });
      });
  }
};


module.exports = { getProducts, addProduct , updateProduct , deleteProduct , getProduct};
