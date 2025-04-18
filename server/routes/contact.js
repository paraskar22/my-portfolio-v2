const express = require("express");
const router = express.Router();
const Message = require("../models/message"); 

// Handle contact form submission
router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Create and save new message
    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    res.status(200).json({ success: "Message saved successfully" });
  } catch (err) {
    console.error("❌ Error saving message:", err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;
