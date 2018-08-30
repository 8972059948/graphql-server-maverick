'use strict';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

var userName = process.env.MONGODB_MLAB_USERNAME;
var passWord = process.env.MONGODB_MLAB_PASSWORD;
var uri      = process.env.MONGODB_MLAB_URI;
var db       = process.env.MONGODB_MLAB_DB;

var localuserName = process.env.MONGODB_LOCAL_USERNAME;
var localpassWord = process.env.MONGODB_LOCAL_PASSWORD;
var localuri      = process.env.MONGODB_LOCAL_URI;
var localdb       = process.env.MONGODB_LOCAL_DB;


var mlaburl      = `mongodb://${userName}:${passWord}@${uri}/${db}`;
var localurl = `mongodb://${localuserName}:${localpassWord}@${localuri}/${localdb}`;

const options = {
	// useMongoClient: true,
	useNewUrlParser: true,
	autoIndex: false, // Don't build indexes
	reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
	reconnectInterval: 500, // Reconnect every 500ms
	poolSize: 10, // Maintain up to 10 socket connections
	// If not connected, return errors immediately rather than waiting for reconnect
	bufferMaxEntries: 0,
	connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
	socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
};

const mlab_connection = mongoose.connect(localurl, options, (err) => {
	if(err) {
		console.log('Cloud Connection Error.. ',err.stack);
	} else {
		console.log('Mlab Clod MongoDB connection successfully..');
	}
});

module.exports = mlab_connection;