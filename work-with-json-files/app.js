const books = require("./books");

const invokeAction = async ({ action, id, title, author }) => {
  switch (action) {
    case "getAll":
      const allBooks = await books.getAll();
      console.log(allBooks);
      break;
    case "getById":
      const oneBook = await books.getById(id);
      console.log(oneBook);
      break;
    case "add":
      const newBook = await books.add({ title, author });
      console.log(newBook);
      break;
    case "updateById":
      const updateBook = await books.updateById(id, { title, author });
      console.log(updateBook);
      break;
    case "removeById":
      const removeBook = await books.removeById(id);
      console.log(removeBook);
      break;

    default:
      console.log("Unknow action");
  }
};

// invokeAction({ action: "getAll" });
// invokeAction({ action: "getById", id: "ck89qe3HriUDHe09TBoJ8" });
// invokeAction({ action: "add", title: "Worm", author: "John Makkrey" });
// invokeAction({
//   action: "updateById",
//   id: "n5d_57Ya3RFgKwo6VhvWM",
//   title: "Dimas",
//   author: "John Makkrey",
// });
invokeAction({ action: "removeById", id: "n5d_57Ya3RFgKwo6VhvWM" });
