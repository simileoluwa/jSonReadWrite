const fs = require("fs");

fs.readFile("simile.json", function (err, data) {
    //check for errors
    if (err) throw err;

    // Converting to JSON
    const students = JSON.parse(data);

    console.log(students);

});