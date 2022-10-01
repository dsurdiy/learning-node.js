const fs = require("fs").promises;
const path = require("path");

(async () => {
  try {
    const data = await fs.readFile("./data.txt", "utf-8");
    console.log(data);

    const newContent = `${data} qwerty`;
    await fs.writeFile("./data1.txt", newContent, "utf-8");

    // await fs.rename("./dateUtilsNewName.js", "./tmp/dateUtilsNewName.js");

    console.log(await fs.readdir("./tmp"));
  } catch (error) {
    console.log(error);
  }
})();
