'use strict';
import express from 'express';
import cors    from 'cors';
import dotenv  from 'dotenv';
import mongoose from 'mongoose';
import faker from 'faker';

import {
	foodModel,
	foodModelMutation,
	resturentModel, 
	resturentModelMutation
} from './mongoose/model';

dotenv.config();
var app = express();

// var foodModel = mongoose.model('foodModel', foodSchema);


// var Schema = mongoose.Schema;
// var ObjectIdSchema = Schema.ObjectId;

app.get('/api/v1/save/foods', cors(), (req, res) => {
	
	var savedata = new foodModel({
		'foodName': 'Apple',
		'foodType': 'Gala',
		'time': Math.floor(Date.now() / 1000) // Time of save the data in unix timestamp format
	})

	foodModelMutation.create(savedata,(err, result) => {
		if (err) { console.log('Error in save ',err); }
		if (result) {
			res.json(result)
		}
	})

})

app.get('/api/v1/save/foods/:foodName/:foodType', cors(), (req, res) => {
	
	var foodName = req.params.foodName;
	var foodType = req.params.foodType;

	var savedata = new foodModel({
		'foodName': foodName,
		'foodType': foodType,
		'time': Math.floor(Date.now() / 1000) // Time of save the data in unix timestamp format
	})

	savedata.save((err, result) => {
		if (err) { console.log('Error in save ',err); }
		if (result) {
			res.json(result)
		}
	})

})

app.get('/api/v1/find/foods', cors(), (req, res) => {

	foodModel.find({},(err, result) => {
		if (err) {
			console.log('Error in finding foods ',err);
			res.send(JSON.stringify({
				error : 'Error'
			}))
		}
		if (result) {
			res.json(result)
		}
	})

})


app.get('/api/v1/removeall/foods', cors(), (req, res) => {

	foodModel.remove({},(err, result) => {
		if (err) {
			console.log('Error in finding foods ',err);
			res.send(JSON.stringify({
				error : 'Error'
			}))
		}

		if (result) {
			res.json(result)
		}
	})

})

app.get('/api/v1/save/resturentcollection', cors(), (req, res) =>{

	var savedata = new resturentModelMutation({
		'resturentName': 'BBQ',
		'menuType': [ 'Checken Roast', 'Tanduri Motton' ],
	})

	savedata.save((err, result) => {
		if (err) { console.log('Error in save ',err); }
		if (result) {
			res.json(result)
		}
	})

})

app.get('/api/v1/save/resturentcollection/:resturentName/:menu1/:menu2', cors(), (req, res) =>{

	var resturentName     = req.params.resturentName;
	var menu1             = req.params.menu1;
	var menu2             = req.params.menu2;

	var savedata = new resturentModel({
		'resturentName': resturentName,
		'menuType': [ menu1, menu2 ],
	})

	resturentModelMutation.create(savedata, (err, result) => {
		if (err) { console.log('Error in save ',err); }
		if (result) {
			res.json(result)
		}
	})

})

app.get('/api/v1/find/resturentcollection', cors(), (req, res) =>{

	resturentModel.find({},(err, result) => {
		if (err) { console.log('Error in save ',err); }
		if (result) {
			res.json(result)
		}
	})

})

app.get('/api/v1/removeall/resturent', cors(), (req, res) =>{

	resturentModel.deleteMany({},(err, result) => {
		if (err) { console.log('Error in save ',err); }
		if (result) {
			res.json(result)
		}
	})

})

module.exports = app;