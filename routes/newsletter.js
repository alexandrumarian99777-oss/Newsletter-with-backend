import express from "express";
import Subscriber from "../models/subscriber.js";

const router = express.Router();

router.post("/subscribe", async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;

    if (!firstName || !lastName || !email) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const existing = await Subscriber.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Email already subscribed." });
    }

    const newSubscriber = new Subscriber({ firstName, lastName, email });
    await newSubscriber.save();

    res.status(201).json({ message: "Subscribed successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
