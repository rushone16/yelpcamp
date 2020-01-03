var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo", {useNewUrlParser:true});

var postSchema = new mongoose.Schema({
   title: String,
   content: String
});

var Post = mongoose.model("Post", postSchema);

var userSchema = new mongoose.Schema({
	email: String,
	name: String,
	posts: [postSchema]
});

var User = mongoose.model("User",userSchema);

/*
var newUser = new User({
	email: "hermione@hogwarts.edu",
	name: "Hermione Granger"
});

newUser.posts.push({
	title:"How to bre Polyjuice potions!",
	content:"Just Kidding"
})

newUser.save(function(err,user){
	if(err){
		console.log(err);
	}
	else{
		console.log(user);
	}
});


var newPost = new Post({
     title: "Apple Juice",
     content: "Apple Juice is Delicious!"
});

newPost.save(function(err, post){
    if(err){
        console.log(err);
    } 
	else {
        console.log(post);
    }
});
*/

User.findOne({name:"Hermione Granger"},function(err,user){
	if(err){
		console.log(err);
	}
	else{
		console.log(user);
	}
})