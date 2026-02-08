const mongoose = require("mongoose")

const volunteerSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  contact: { type: String, required: true },
  dob: { type: String, required: true },
  location: { type: String, required: true },
  languages: { type: String, default: "" },
  availability: { type: [String], default: [] }
});


module.exports = mongoose.model("Volunteer", volunteerSchema);