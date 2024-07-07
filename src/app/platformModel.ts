import mongoose, { Document } from "mongoose";
const Schema = mongoose.Schema;
const platformSchema = new Schema({
  visitors: {
    type: Number,
    default: 0,
  },
  countries: {
    type: [String],
  },
});

const platformModel =
  mongoose.models.platformModel ||
  mongoose.model("platformModel", platformSchema);
export default platformModel;

export interface IPlatform extends Document {
  visitors: number;
  countries: [string];
}
