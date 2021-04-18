const request = require("request");
const fs = require("fs");

const url = "http://jsonplaceholder.typicode.com/posts";

request(
  {
    url: url,
    json: true,
  },

  (err, response, body) => {

    // Stringify the data fetched from the url
    const posts = JSON.stringify(body, null, 2);

    //Create a variable and save file path to it
    let fileLocation = "./result/posts.json";

    // TO DO: Write file to posts.json
    fs.writeFileSync(fileLocation, posts, { flag: "a+" }, (err) => {
        //If file fails to write, throw and error
        if (err) throw err;
        // Print after writing the file
        console.log("File written successfully.");
    });
  }
);
