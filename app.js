import express from 'express';
import cors from "cors";

import Hello from './hello.js';
import Lab5 from './lab5.js';
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";

import "dotenv/config";

const app = express();

app.use(cors());
app.use(express.json());

CourseRoutes(app);
ModuleRoutes(app);

Hello(app);
Lab5(app);
// console.log("hey");
// app.get("/api/hello", (req, res) => {
//     res.send("hello");
//   });
app.listen(process.env.PORT || 4000);