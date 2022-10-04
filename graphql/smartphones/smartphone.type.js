const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID
  } = require("graphql");
  
  exports.smartphoneType = new GraphQLObjectType({
    name: "smartphone",
    description: "this is a single smartphone",
    fields: {
      id: {
        type: GraphQLID,
        description: "this is the smartphone id"
      },
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