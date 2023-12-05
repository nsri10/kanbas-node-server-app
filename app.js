import express from 'express';
import session from "express-session";
import cors from "cors";

import Hello from './hello.js';
import Lab5 from './lab5.js';
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";

import "dotenv/config";
import mongoose from "mongoose";
import UserRoutes from "./users/routes.js";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/kanbas';
mongoose.connect(CONNECTION_STRING);

const app = express();

app.use(
    cors({
      credentials: true,
      origin: "http://localhost:3000",
    })
   );
   const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
  };
  app.use(
    session(sessionOptions)
  );  
app.use(express.json());

CourseRoutes(app);
ModuleRoutes(app);
UserRoutes(app);

Hello(app);
Lab5(app);
app.listen(4000);