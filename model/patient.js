import mongoose from "mongoose";
const { Schema } = mongoose;
const PatientSchema = new Schema(
    {
        name: { type: String, required: true},
        contactDetails: { type: String, required: true},
        medicalHistory: { type: String, required: true}
      })
  export const patientModel = mongoose?.patients || mongoose.model('patients', PatientSchema)