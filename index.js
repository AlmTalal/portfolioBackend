const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`running on port ${port}`));
