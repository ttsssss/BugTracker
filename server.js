const express = require("express");
const app = express();
const routes = require("./routes");
const path = require("path");

const PORT = process.env.PORT || 3001;
require("dotenv").config();
const cors = require("cors");