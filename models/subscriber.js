import mongoose from "mongoose";

const subscriberSchema = new mongoose.Schema({
  firstName: { type: String, required: true, trim: true },
  lastName:  { type: String, required: true, trim: true },
  email:     { type: String, required: true, unique: true, trim: true },
  date:      { type: Date, default: Date.now },
});

export default mongoose.model("Subscriber", subscriberSchema);
