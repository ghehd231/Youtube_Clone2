import express from "express";
// const express = require("express");
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();



const handleListening = () => {
    console.log(`Listening on: http://localhost:${PORT}`);
}
const handleHome = (req, res) => res.send("Hello from my ass");
const handleProfile = (req, res) => res.send("You are on my profile");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", handleHome);
app.get("/profile", handleProfile);



const PORT = process.env.PORT || 4000;
app.listen(PORT, handleListening);