'use strict';
import {
    GraphQLObjectType,
    GraphQLList,
    GraphQLNonNull,
    GraphQLID
} from 'graphql';

import { foodModel, resturentModel } from '../../../mongoose/model';
import { foodItemOutputType, resturentOutputType }  from '../model';

const Query = new GraphQLObjectType({
    name: 'RootQueryType',
        fields: () => ({
            foodItem: {
                type: new GraphQLList(foodItemOutputType),
                args: {
                    itemId: {
                        name: 'itemId',
                        type: new GraphQLNonNull(GraphQLID)
                    }
                },
                resolve: (_, {itemId}) => {
                    var foundItem = new Promise((resolve, reject) => {
                        foodModel.find({_id:itemId},(err, res) => {
                            err ? reject(err) : resolve(res)
                        })
                    })
                    return foundItem
                }
            },
            foodItems: {
                type: new GraphQLList(foodItemOutputType),
                resolve: () => {
                    var foundItems = new Promise((resolve, reject) => {
                        foodModel.find({},(err, res) => {
                            err ? reject(err) : resolve(res)
                        })
                    })
                    return foundItems
                }
            },
            resturentCollection: {
                type: new GraphQLList(resturentOutputType),
                resolve: () => {
                    var foundResturents = new Promise((resolve, reject) => {
                        resturentModel.find({},(err, res) => {
                            err ? reject(err) : resolve(res)
                        })
                    })
                    return foundResturents
                }
            }

        })
});

module.exports = Query;