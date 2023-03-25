import express from "express";

import { addUser, getUsers } from "../controller/userController.js";
import {
	setConversation,
	getConversation,
} from "../controller/conversationController.js";

import { getMessages, newMessage } from "../controller/messageController.js";
import { uploadFile, getFile } from "../controller/fileController.js";

import upload from "../utils/upload.js";

const route = express.Router();

const BASE_URL = process.env.BASE_URL;

route.post("/add", addUser);
route.get("/users", getUsers);

route.post("/conversation/add", setConversation);
route.post("/conversation/get", getConversation);

route.post("/message/add", newMessage);
route.get("/message/get/:id", getMessages);

route.post("/file/upload", upload.single("file"), uploadFile);
route.get("/file/:filename", getFile);

export default route;
