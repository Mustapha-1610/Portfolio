import mongoose, { Document } from "mongoose";

const Schema = mongoose.Schema;
const projectSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  coverPicture: {
    type: String,
    required: true,
  },
  pictures: [
    {
      type: String,
    },
  ],
  links: {
    github: {
      type: String,
    },
    youtube: {
      type: String,
    },
    website: {
      type: String,
    },
  },
  tags: [
    {
      type: String,
    },
  ],
});

const projectModel =
  mongoose.models.projectModel || mongoose.model("projectModel", projectSchema);
export default projectModel;

export interface IProject extends Document {
  title: string;
  description: string;
  coverPicture: string;
  pictures?: string[];
  links?: {
    github?: string;
    youtube?: string;
    website?: string;
  };
  tags?: string[];
}
