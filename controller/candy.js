const user = require("../model/candyModel");

exports.getProducts = async function (req, res, next) {
  try {
    let arr = await user.findAll();
    res.status(200).json(arr);
  } catch (error) {
    console.log(error);
  }
};
exports.patchProduct = async function (req, res, next) {
  try {
    const id = req.params.id;
    // console.log(req.body)
    await user.update(req.body, { where: { id: id } });
    res.send("updated");
  } catch (error) {
    console.log(error);
  }
};
exports.postProduct = async function (req, res, next) {
  try {
    user.create(req.body);
    res.send("product posted");
    // console.log(req.body);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

exports.deleteProduct = async function (req, res, next) {
  try {
    const id  = req.params.id;
    await user.destroy({ where: { id: id } });
  } catch (error) {
    console.log(error);
  }
};
