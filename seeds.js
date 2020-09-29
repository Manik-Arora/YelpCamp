var mongoose   = require("mongoose");
var Campground = require("./models/campground");
var Comment    = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest", 
        image: "https://images.pexels.com/photos/587976/pexels-photo-587976.jpeg?auto=compress&cs=tinysrgb&h=350",
        description: "Located in remote country side of South Coorg ,this nature camp is nestled at the foothills of the Brahmagiri range.The campground is  surrounded by coffee estates & western ghats. The campground is an open grassy meadow with sweeping views of the horizon.  The camp is located amidst 50 acres of private property and constructed with locally sourced materials. We can accommodate up to 25 people suitable for family and friends.We have a large dining area where we serve the authentic Kodava Cuisine and a chill zone for some evening bonfire and traditional barbecuing."
    },
    {
        name: "Desert Mesa", 
        image: "https://pixabay.com/get/54e5dc474355a914f1dc84609620367d1c3ed9e04e507749752872d09544c6_340.jpg",
        description: "Located in remote country side of South Coorg ,this nature camp is nestled at the foothills of the Brahmagiri range.The campground is  surrounded by coffee estates & western ghats. The campground is an open grassy meadow with sweeping views of the horizon.  The camp is located amidst 50 acres of private property and constructed with locally sourced materials. We can accommodate up to 25 people suitable for family and friends.We have a large dining area where we serve the authentic Kodava Cuisine and a chill zone for some evening bonfire and traditional barbecuing."
    },
    {
        name: "Canyon Floor", 
        image: "https://pixabay.com/get/53e4d1424b56a814f1dc84609620367d1c3ed9e04e507749752872d09544c6_340.jpg",
        description: "Located in remote country side of South Coorg ,this nature camp is nestled at the foothills of the Brahmagiri range.The campground is  surrounded by coffee estates & western ghats. The campground is an open grassy meadow with sweeping views of the horizon.  The camp is located amidst 50 acres of private property and constructed with locally sourced materials. We can accommodate up to 25 people suitable for family and friends.We have a large dining area where we serve the authentic Kodava Cuisine and a chill zone for some evening bonfire and traditional barbecuing."
    }
];

function seedDB(){
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("Removed Campgrounds");
        //Add a few Campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                    } else {
                        console.log("Added a Campground");
                        //Create a Comment
                        Comment.create(
                        {
                            text: "This place is great, but I wish there was interent",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new Comment");
                            }
                        });
                    }
            }); 
        });
    });
}

module.exports = seedDB;


