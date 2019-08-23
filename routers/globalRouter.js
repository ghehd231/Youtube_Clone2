//videos, upload, videoDetail, editVideo, deleteVideo 불러오기  나머지꺼는 글로벌로
import express from "express";
import routes from "../routes";

import {
    home,
    search
   
} from "../controllers/videoController";


import {
    join,
    login,
    logout
   
} from "../controllers/userController";
const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);

export default globalRouter;