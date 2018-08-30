'use strict';
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
} from 'graphql';

const foodItemType = new GraphQLObjectType({
    name: 'food',
    description: 'food item',
    fields: () => ({
      _id: {
        type: GraphQLID,
        description: 'Resturent Object Id'
      },
      itemId: {
        type: GraphQLString,
        description: 'The id of the food item.',
      },
      foodName: {
        type: GraphQLString,
        description: 'The name of the food.',
      },
      foodType: {
        type: GraphQLString,
        description: 'The type of food. '
      },
      foodDescription:  {
        type: GraphQLString,
        description: 'About the food. '
      },
    })
});

module.exports = foodItemType;