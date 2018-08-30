'use strict';
import {
    GraphQLString,
    GraphQLInputObjectType,
    GraphQLList
} from 'graphql';

const resturentCollection = new GraphQLInputObjectType({
    name: 'resturentmutation',
    description: 'resturent menu items',
    fields: () => ({
      resId: {
        type: GraphQLString,
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

const Location = new GraphQLInputObjectType({
  name: 'resturentlocation',
  fields: () => ({
      city:    { type: GraphQLString },
      state:   { type: GraphQLString },
      country: { type: GraphQLString },
      pin:     { type: GraphQLString },
  })
})

module.exports = resturentCollection;