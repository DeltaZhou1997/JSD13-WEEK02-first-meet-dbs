use("sample_mflix");

db.comments.find();

db.comments.findOne({ email: “john_bishop@fakegmail.com”});

db.comments.findOne({ name: “John Bishop”});