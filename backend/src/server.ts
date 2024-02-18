import * as express from "express";
import { AppDataSource } from "./data-source";
import cors = require("cors");
import bodyParser = require("body-parser");
import { Express } from "express";
import "dotenv/config";
import { GalleryRouter } from "./router/Gallery";
import { LoginRouter } from "./router/AuthenticateRouter";

// Establish connection to database
AppDataSource.initialize()
  .then(async () => {
    console.log("Database Connected!!!");
  })
  .catch((error) => console.log("Error during Data Source Connection", error));

// Create an Express application
const app: Express = express();
const port = process.env.PORT || 3000;

// CORS
const allowedOrigins = ["http://localhost:5173"];
const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

// Middleware
app.use(cors(options));
app.use(bodyParser.json());

// Routes
app.use("/api/gallery", GalleryRouter);
app.use("/api/auth", LoginRouter);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});