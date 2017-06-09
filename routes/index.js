var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var db = req.db;
    var collection = db.get('postcollection');
	collection.find({}, {sort: {"number":-1}}, function(e,docs){
		posts = docs;
		console.log(posts);
        res.render('index', {
            "postlist" : docs,
        });
    });
});



router.get('/admin', function (req, res) {
    res.render('admin', {});
} );

router.get('/:n', function(req, res, next) {
    var db = req.db;
    var collection = db.get('postcollection');
    collection.find({}, {}, function(e,docs){
        res.render('postpage', {
            "post" : docs,
            "n": req.params.n,
        });
    });
});

router.post('/addpost', function(req, res){
	var db = req.db;
	
	let title = req.body.title;
	let short = req.body.short;
	let posttext = req.body.posttext;  
	let imageUrl = req.body.imageUrl;   
	let postType = req.body.postType;   
	let author = req.body.author;   
	
	if(title == "" || short == "" || posttext == "" || imageUrl == "")
	{
		alert("Заполните все поля");
		return;
	}
	else
	{
		var collection = db.get('postcollection');
		collection.insert({
        "title" : title,
        "short" : short,
        "text" : posttext,
        "theme" : postType,
        "url" : imageUrl,
        "date" : (new Date()).toJSON(),
		"number": collection.count(),
		"author": author
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // And forward to success page
            res.redirect("admin");
        }
    });
	//}
	
	
	
	
});

// POST to Add User Service
router.post('/adduser', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var userName = req.body.username;
    var userEmail = req.body.useremail;

    // Set our collection
    var collection = db.get('usercollection');

    // Submit to the DB
    collection.insert({
        "username" : userName,
        "email" : userEmail
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // And forward to success page
            res.redirect("userlist");
        }
    });
});


module.exports = router;
