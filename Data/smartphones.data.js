var Smartphone = require("./../models/smartphone.model");


module.exports = {
  insertSmartphone: smartphone => {
    let newSmartphone = new Smartphone(smartphone);
    return newSmartphone.save();
  },

  getAllSmartphones ()  {
    return Smartphone.find({})
  },

  getSmartphoneById: id => {
    return Smartphone.findById(id);
  },

  updateSmartphone: (id, smartphone) => {
    return Smartphone.findByIdAndUpdate(id, smartphone);
  },

  deleteSmartphone: id => {
    return Smartphone.deleteOne({ _id: id });
  }
};