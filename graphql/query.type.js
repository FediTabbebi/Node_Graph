//const smartphoneController=require('../controller/smartphone.controller')    
const {
       GraphQLObjectType,
       GraphQLList,
       GraphQLInt,
      
    }=require('graphql');

    const smartphoneModel = require('../data/smartphones.data');
    const { smartphoneType } = require('./smartphones/smartphone.type');

    exports.queryType = new GraphQLObjectType({
        name: 'Query',
        description: 'this is the query type',
        fields: {
          Smartphones: {
            type: new GraphQLList(smartphoneType),
            description: 'this is the list of smartphones returned',
            args: {
              top: { type: GraphQLInt }
            },
            resolve: (_, args) => {
              return smartphoneModel.getAllSmartphones(args.top);
            }
          },
         
        }
      });
      