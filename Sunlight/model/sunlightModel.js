
import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Cities = new Schema({
  "City": { type: String },
  "Country": { type: String },
  "Jan": { type: Number },
  "Feb": { type: Number },
  "Mar": { type: Number },
  "Apr": { type: Number },
  "May": { type: Number },
  "Jun": { type: Number },
  "Jul": { type: Number },
  "Aug": { type: Number },
  "Sep": { type: Number },
  "Oct": { type: Number },
  "Nov": { type: Number },
  "Dec": { type: Number },
  "Year": { type: Number }
});

export default mongoose.model("cities", Cities);