const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todo = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    // user_id: {
    //   type: String,
    //   required: true,
    // },
  },
  { timestamps: true }
);
