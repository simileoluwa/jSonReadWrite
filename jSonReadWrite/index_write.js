const fs = require("fs");

const students = require("./simile.json");

fs.writeFile("./result/posts.json", JSON.stringify(students, null, 2), err => {
    //check for errors
    if (err) throw err;
    console.log("Confirmed Writing file");
});