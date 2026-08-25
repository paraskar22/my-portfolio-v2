const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors({ origin: "*" }));
app.use(express.json());

// Chat route — no DB needed
app.use("/api/chat", require("./routes/chat"));

// Contact route — connects to DB lazily only when a request comes in
app.use("/api/contact", require("./routes/contact"));

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
