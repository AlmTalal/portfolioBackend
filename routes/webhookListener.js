const express = require("express");
const router = express.Router();
const { io } = require("socket.io-client");
const socket = io("https://bolt-ai-chatbot.onrender.com");

router.post("/get", (req, res) => {
  //Send the alert to the axios Server
  const message = req.body;
  socket.emit("webStatus", { message });
  console.log(req.body);
});

module.exports = router;
/**
 * Listens For Webhook notifications from google clouds
 */
