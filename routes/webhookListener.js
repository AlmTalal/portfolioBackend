const express = require("express");
const router = express.Router();
const { io } = require("socket.io-client");
const socket = io("https://bolt-ai-chatbot.onrender.com");
//const socket = io("http://localhost:3001");

router.post("/get", (req, res) => {
  //Send the alert to the axios Server
  const message = req;
  socket.emit("webStatus", message);
  res.status(200).send("OK");
});

setInterval(() => {
  socket.emit("webStatus", "EL PUERTO");
}, 60000);

module.exports = router;
/**
 * Listens For Webhook notifications from google clouds
 */
