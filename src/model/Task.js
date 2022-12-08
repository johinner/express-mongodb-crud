import { Schema, model } from "mongoose";

const TaskSchema = Schema(
  {
    tournament: {
      type: String,
      trim: true
    },
    event: {
      type: String,
    },
    strategy: {
      type: String,
      trim: true,
    },
    betAmount: {
      type: Number,
      trim: true,
    },
    cuota: {
      type: Number,
      trim: true,
    },
    utility: {
      type: Number,
      trim: true,
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Task", TaskSchema);

//required: true,  unique: true 