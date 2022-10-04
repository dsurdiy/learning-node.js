const fs = require("fs/promises");
// const fs = require("fs");

const fileOperations = async ({ action, filePath, data }) => {
  switch (action) {
    case "read":
      const text = await fs.readFile(filePath, "utf-8");
      console.log(text);
      //   const result = await fs.readFile(filePath);
      //   const text = result.toString();
      //   console.log(text);
      break;
    case "add":
      await fs.appendFile(filePath, data);
      break;
    case "replace":
      await fs.writeFile(filePath, data);
      break;
    default:
      console.log("Unknow action");
  }
};

// fileOperations({ action: "read", filePath: "./files/file.txt" });

// fileOperations({
//   action: "add",
//   filePath: "./files/file.txt",
//   data: "\nWelcome to Node.js",
// });

// fileOperations({
//   action: "replace",
//   filePath: "./files/file.txt",
//   data: "Welcome to Node.js",
// });

fileOperations({
  action: "add",
  filePath: "./files/file2.txt",
  data: "\nWelcome to Node.js",
});

fileOperations({
  action: "replace",
  filePath: "./files/file3.txt",
  data: "Welcome to Node.js",
});

// fs.readFile("./files/file.txt")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error.message));

// fs.readFile("./files/file.txt", (error, data) => {
//   console.log(error);
//   console.log(data);
// });
