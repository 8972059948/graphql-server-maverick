'use strict';
import {
    GraphQLID,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList
} from 'graphql';

const resturentCollection = new GraphQLObjectType({
    name: 'resturent',
    description: 'resturent menu item',
    fields: () => ({
      _id: {
        type: GraphQLID,
        description: 'Resturent Object Id'
      },
      resId: {
        type: GraphQLString,
        description: 'Resturent Item Id'
      },
      resturentName: {
        type: GraphQLString,
        description: 'The name of the resturent.',
      },
      location: {
        type: Location,
        description: 'The Resturent Location.'
      },
      resDescription: { type: GraphQLString },
      openingHours:   { type: GraphQLString },
      otherDeatils:   { type: GraphQLString },
      menuType: {
        type: new GraphQLList(GraphQLString),
        description: 'The type of menu a resturent have. '
      }
    })
});


const Location = new GraphQLObjectType({
  name: 'resturentlocationoutputtype',
  fields: () => ({
      city:    { type: GraphQLString },
      state:   { type: GraphQLString },
      country: { type: GraphQLString },
      pin:     { type: GraphQLString },
  })
})

module.exports = resturentCollection;