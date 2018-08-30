'use strict';
import mongoose from 'mongoose';
import mlab from '../../connection';

mlab.then(
    () => console.log('mlab connection foodSchema'),
    (err) => console.log(err)
);


var Schema = mongoose.Schema;
var ObjectIdSchema = Schema.ObjectId;

var foodSchema = new Schema({
    _id: ObjectIdSchema,
    itemId: {type: String, default: 'N/A'},
    foodName: String,
    foodType: String,
    foodDescription: String,
}, {
	collection: 'food'
});

module.exports = foodSchema;