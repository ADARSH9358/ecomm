// import express from "express";
// import colors from "colors";
// import dotenv from "dotenv";
// import morgan from "morgan";
// import connectDB from "./config/db.js";
// import authRoutes from "./routes/authRoute.js";
// import categoryRoutes from "./routes/categoryRoutes.js";
// import productRoutes from "./routes/productRoutes.js";
// import cors from "cors";
// import path from "path";
// import {fileURLToPath} from "url";
// //configure env
// dotenv.config();

// //databse config
// connectDB();

// //rest object
// // esmodule fix
// const __filename=fileURLToPath(import.meta.url);
// const __dirname=path.dirname(__filename);
// const app = express();

// //middelwares
// app.use(cors());
// app.use(express.json());
// app.use(morgan("dev"));
// app.use(express.static(path.join(__dirname,"./client/build")));

// //routes
// app.use("/api/v1/auth", authRoutes);
// app.use("/api/v1/category", categoryRoutes);
// app.use("/api/v1/product", productRoutes);

// //rest api
// // app.get("/", (req, res) => {
// //   res.send("<h1>Welcome to ecommerce app</h1>");
// // });
// app.use("*",function(req,res){
//   res.sendFile(path.join(__dirname,"./client/build/index.html"));
// })

// //PORT
// const PORT = process.env.PORT || 8080;

// //run listen
// app.listen(PORT, () => {
//   console.log(
//     `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
//       .white
//   );
// });



import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";
import path from "path";

import { fileURLToPath } from "url";

// Configure env
dotenv.config();

// Database config
connectDB();

// REST object
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
const mode = process.env.DEV_MODE || 'development';
const PORT = process.env.PORT || 8080;

// Dynamic static file path based on environment
const staticPath = process.env.NODE_ENV === 'production' ? 'client/build' : './client/public';
app.use(express.static(path.join(__dirname, staticPath)));

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

// Wildcard route for serving SPA
app.use("*", function(req, res) {
  res.sendFile(path.join(__dirname, staticPath, 'index.html'));
});

// PORT


// Run the server
app.listen(PORT, () => {
  console.log(`Server running in mode on port ${PORT}`.bgCyan.white);
});
