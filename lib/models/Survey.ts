import { ISurveySubmission } from "types";
import mongoose, { Model, Schema } from "mongoose";
export const surveySchema = new Schema({
  name: { type: String, required: true },
  responses: [{
    question: String,
    options: [String],
    pickedOption: Number
  }],
  ipAddress: String,
  userAgent: String,
  surveyToken: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now }
});

export const Survey = mongoose.model('Survey', surveySchema);
