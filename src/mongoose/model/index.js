'use strict';
import mongoose from 'mongoose';
import resturentSchema from './resturent/resturentSchema';
import resturentSchemMutation from './resturent/resturentSchemaMutation';
import foodSchema from './food/foodSchema';
import foodSchemaMutation from './food/foodSchemamutation';

const resturentModel = mongoose.model('resturentModel', resturentSchema);
const resturentModelMutation = mongoose.model('resturentModelMutation',resturentSchemMutation);
const foodModel      = mongoose.model('foodmodel', foodSchema);
const foodModelMutation = mongoose.model('foodmodelmutation', foodSchemaMutation);
const Model          = { resturentModel, resturentModelMutation, foodModel, foodModelMutation };

module.exports = Model;