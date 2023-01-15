const mongoose = require("mongoose");
const { Schema } = mongoose;
const stockSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  stock_id: {
    type: String,
    require: true,
    unique: true,
  },
  stock_name: {
    type: String,
    require: true,
  },
  date_of_importing: {
    type: String,
    require: true,
  },
  date_of_exporting: { type: String },
  no_of_units: { type: String, require: true },
  isbn: {
    type: String,
    require: true,
  },
  expired: { type: Boolean },
});

module.exports = mongoose.model("Stock", stockSchema);
