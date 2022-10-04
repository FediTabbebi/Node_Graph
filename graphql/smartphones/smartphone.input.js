const {
    GraphQLString,
    GraphQLInputObjectType
  } = require("graphql");
  
  exports.smartphoneInput = new GraphQLInputObjectType({
    name: "smartphoneInput",
    description: "",
    fields: {
        brand: {
            type: GraphQLString,
            description: ""
          },
          Display_Quality: {
            type: GraphQLString,
            description: ""
          },
          Screen_Size: {
            type: GraphQLString,
            description: ""
          },
          Camera: {
            type: GraphQLString,
            description: ""
          },
      Storage: {
        type: GraphQLString,
        description: ""
      },
      Battery: {
        type: GraphQLString,
        description: ""
      },
     
        Operating_System: {
        type: GraphQLString,
        description: ""
      }
    }
  });