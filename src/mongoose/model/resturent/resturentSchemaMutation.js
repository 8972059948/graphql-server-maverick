'use strict';
import mongoose from 'mongoose';
import mlab from '../../connection';

mlab.then(
    () => console.log('mlab connection resturentSchema'),
    (err) => console.log(err)
);


var Schema = mongoose.Schema;

var resturentSchemaMutation = new Schema({
    resId: {type:  String, default: 'N/A'},
    resturentName: String,
    location: {
        city:    String,
        state:   String,
        country: String,
        pin:     String,
    },
    resDescription: String,
    openingHours:   String,
    otherDeatils:   String,
    menuType:      [String]
}, {
	collection: 'resturent'
});

module.exports = resturentSchemaMutation;