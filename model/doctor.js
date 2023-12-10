import mongoose from "mongoose";

const { Schema } = mongoose;

const DoctorSchema = new Schema(
  {
      specialization: { type: String, required: true },
      city: {type: String, required: true},
      email: { type: String, required: true },
    fullName: { type: String, required: true },
    password: { type: String, required: true }, // Assuming password is a string
    state: {type:String, required: true},
    zip: {type: String, required: true}
  });

export const doctorModel = mongoose.models.doctors || mongoose.model('doctors', DoctorSchema);
