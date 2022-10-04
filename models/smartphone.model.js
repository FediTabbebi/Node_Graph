const mongoose =require('mongoose');

const SmartphoneSchema =mongoose.Schema({

  brand: String,
  Display_Quality: String,
  Screen_Size: String,
  Camera: String,
  Storage: String,
  Battery: String,
  Operating_System: String
 
 

});
SmartphoneSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    //do not reveal passwordHash
    delete returnedObject.password;
  },
});

  const smartphone = mongoose.model("smartphone", SmartphoneSchema);
  module.exports = smartphone;