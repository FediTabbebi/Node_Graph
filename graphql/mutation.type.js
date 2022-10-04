const { GraphQLObjectType, GraphQLID } = require("graphql");
const { smartphoneInput } = require("./smartphones/smartphone.input");
const { smartphoneType } = require('./smartphones/smartphone.type');

const smartphoneModel = require("../data/smartphones.data");

exports.mutationType = new GraphQLObjectType({
  name: "Mutation",
  description: "",
  fields: {
    addNewSmartphone: {
      type: smartphoneType,
      args: {
        smartphone: {
          type: smartphoneInput,
          description: "this is the input type"
        }
      },
      resolve: (_, args) => {
        return smartphoneModel.insertSmartphone(args.smartphone);
      }
    },
    updateSmartphone: {
      type: smartphoneType,
      args: {
        id: {
          type: GraphQLID,
          description: ''
        },
        smartphone: {
          type: smartphoneInput,
          description: ''
        }
      },
      resolve: (_, args) => {
        return smartphoneModel.updateSmartphone(args.id, args.smartphone);
      }
    },
    deleteSmartphone: {
      type: smartphoneType,
      args: {
        id: {
          type: GraphQLID,
          description: ''
        }
      },
      resolve: (_, args) => {
        return smartphoneModel.deleteSmartphone(args.id);
      }
    },
    
  }
});