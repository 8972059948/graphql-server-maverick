'use strict';
import {
    GraphQLObjectType,
    GraphQLNonNull
} from 'graphql';

import { foodModelMutation, resturentModelMutation } from '../../../mongoose/model';

import {
    foodItemInputType,
    foodItemOutputType,
    resturentInputType, 
    resturentOutputType
} from '../model';

// const foodModelMutation = mongoose.model('foodmodelmutation', foodSchemaMutation);

const MutationRootType = new GraphQLObjectType({
    name: 'MutationRoot',
    description: 'Mutation API',
    fields: () => ({
        fooditemSave: {
            type: foodItemOutputType,
            args: {
                inputItem: {
                    type: foodItemInputType
                }
            },
            resolve: (_, { inputItem }) => {
                // var savefoodItem = new foodModel(inputItem);  
                var saveItem = new Promise((resolve,reject) => {
                    foodModelMutation.create(inputItem,(err,res) => {
                        err ? reject(err) : resolve(res)
                    })
                })
                return saveItem
            }
        },
        resturentmenuItemSave: {
            type: resturentOutputType,
            args: {
                inputItem: {
                    type: resturentInputType
                }
            },
            resolve: (_, { inputItem }) => {
                var saveItem = new Promise((resolve,reject) => {
                    resturentModelMutation.create(inputItem,(err,res) => {
                        err ? reject(err) : resolve(res)
                    })
                })
                return saveItem
            }
        }
    })
});

module.exports = MutationRootType;