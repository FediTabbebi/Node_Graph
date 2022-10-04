// const smartphoneServer = require('../services/smartphone.services')
// const Smartphone =require("../models/smartphone.model");
// const smartphone = require('../models/smartphone.model');

// exports.registerSmartphone = (async (req, res) => {
//     var register = await smartphoneServer.register(req.body);
//     if (register["errtype"] == "1")
//       res.status(400).json({
//         "message": register["message"]
//       })
//     else if (register["errtype"] == "2")
//       res.status(500).json({
//         "message": register["message"]
//       })
//     else
//       res.status(200).json({
//         "message": "Success",
//         "data": register
//       });
//   });

//   // exports.getAllSmartphones = (async (req, res) => {
//   //   try {
//   //       const smartphones = await Smartphone.find()
//   //     var listSmartphones = [];
//   //     for (var i = 0; i < smartphones.length; i++)
//   //     listSmartphones.push(smartphones[i])
//   //     res.json(listSmartphones)
//   //   } catch (err) {
//   //     res.status(500).json({
//   //       message: err.message
//   //     })
//   //   }
//   // })
//   exports.getAllSmartphones = (async (req, res) => {
    
//       return smartphone.find({})
 
//   });
  