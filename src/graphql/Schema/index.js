'use strict';
import { GraphQLSchema } from 'graphql';
import Query from './query';
import MutationRootType from './mutation';
// import Subscriptions from './subscription';

const Schema = new GraphQLSchema({
    query: Query,
    mutation: MutationRootType,
    //subscription: Subscriptions
});

module.exports = Schema;
