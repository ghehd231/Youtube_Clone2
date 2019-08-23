import express from "express";
// const express = require("express");
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
// import { userRouter } from "./router";

import {localMiddlewares} from "./middlewares";
import routes from "./routes";

const app = express();
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from './routers/globalRouter';

app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));
app.use(localMiddlewares);

app.use(routes.users, userRouter);

app.use(routes.videos, videoRouter);
app.use(routes.home, globalRouter);

export default app;
