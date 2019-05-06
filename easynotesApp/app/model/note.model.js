// const mongoose = require("mongoose");

// const NoteSchema = mongoose.Schema({
//   title: String,
//   content: String
// });

// module.export = mongoose.model("Note", NoteSchema);
var mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: String,
  price: String
});

module.exports = mongoose.model("product", productSchema);
