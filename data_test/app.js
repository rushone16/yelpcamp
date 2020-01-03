const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/cats_app",{
	useNewUrlParser: true,
	useCreateIndex: true 
}).then(() => {
	console.log('Connected to DB!!');
}).catch(err => {
	console.log('ERROR:' , err.message);P
});


app.get('/',(req,res) => {
	res.send('Is this  thing on?');
});

var catSchema = new mongoose.Schema({
	name: String,
	age: Number,	
	temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

Cat.create({
	name:"Snow White",
	age:15,
	temperament:"Bland"
},function(err,cat){
	if(err){
		console.log("Error69");
		console.log(err);
	}
	else{
		console.log(cat);
	}
});

Cat.find({},function(err,cats){
	if(err){
		console.log("Error69");
		console.log(err);
	}
	else{
		console.log("All the Cats")
		console.log(cats);
	}
});



app.listen(3000, () =>{
	console.log('Server listening on Port 3000!');
});