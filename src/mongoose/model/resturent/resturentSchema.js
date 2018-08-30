'use strict';
import mongoose from 'mongoose';
import mlab from '../../connection';

mlab.then(
    () => console.log('mlab connection resturentSchema'),
    (err) => console.log(err)
);


var Schema = mongoose.Schema;
var ObjectIdSchema = Schema.ObjectId;

var resturentSchema = new Schema({
    _id: ObjectIdSchema,
    resId: { type:  String, default: 'N/A' },
    resturentName:  String,
    location: {
        city:       String,
        state:      String,
        country:    String,
        pin:        String,
    },
    resDescription: String,
    openingHours:   String,
    otherDeatils:   String,
    menuType:      [String]
}, {
	collection: 'resturent'
});

module.exports = resturentSchema;