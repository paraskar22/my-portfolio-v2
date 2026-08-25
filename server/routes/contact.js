const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Message = require("../models/message");

// Lazy MongoDB connection — only connects when contact form is used
const connectDB = async () => {
  if (mongoose.connection.readyState === 1) return; // already connected
  await mongoose.connect(process.env.MONGO_URI);
};

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    await connectDB();
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    res.status(200).json({ success: "Message saved successfully" });
  } catch (err) {
    console.error("❌ Error saving message:", err.message);
    res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;
