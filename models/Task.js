const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const taskSchema = new mongoose.Schema(
  {
    proje_name: {
      type: String,

    },
    text: {
      type: String,
    },
    links:{
        type:Array
    },
    user: {
      type: Array,
      ref: "User",
      required: true,
    },
    bYear: {
        type: Number,
        required: true,
        trim: true,
      },
      bMonth: {
        type: Number,
        required: true,
        trim: true,
      },
      bDay: {
        type: Number,
        required: true,
        trim: true,
      },
      taskState:{
        type:Number,
        default:1,
      },
    comments: [
      {
        comment: {
          type: String,
        },
        image: {
          type: String,
        },
        commentBy: {
          type: String,
          ref: "User",
        },
        commentAt: {
          type: Date,
          default: new Date(),
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Task", taskSchema);
