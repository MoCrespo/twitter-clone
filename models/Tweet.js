const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tweetSchema = new Schema({
  user: [
    {
      user_id: {
        type: String,
        required: true,
        unique: true,
      },
      user_name: {
        type: String,
        required: true,
        unique: true,
      },
      full_name: {
        type: String,
        required: true,
      },
    },
  ],
  tweet_date: {
    type: Date,
    default: Date.now,
  },
  tweet: {
    type: String,
  },
  likes: [
    {
      count: {
        type: Number,
      },
      members: {
        type: [String],
      },
    },
  ],
});

module.exports = Tweet = mongoose.model("tweet", tweetSchema);
