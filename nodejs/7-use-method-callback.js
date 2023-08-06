const fs = require("fs");
fs.writeFile("textfile.txt", "Text Content", (err) => {
  if (err) console.log(err);
  else {
    console.log("File written successfully\n");
    console.log("The written has the following contents:");
    console.log(fs.readFileSync("textfile.txt", "utf8"));
  }
});
