// const smartphone =require("../models/smartphone.model")

// async function  register (params) {
//     var result;
//     try {
//       const Smartphone = new smartphone(params);
//       await Smartphone.save().then((response) => {
//           result = response
//         })
//         .catch((err) => {
//           result = {
//             "errtype": "1",
//             "message": err["message"]
//           }
//         });
//       return result
//     } catch (err) {
//       return {
//         "errtype": "2",
//         "message": err.message
//       }
//     }
//   };
//   module.exports = {
//     register,}