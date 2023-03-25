import { request, response } from "express";
import mongoose from "mongoose";
import User from "../model/User.js";

export const addUser = async (request, response) => {
	try {
		let userExists = await User.findOne({ sub: request.body.sub });

		if (userExists) {
			response.status(200).json({
				msg: "User already Exists",
			});
			return;
		}

		const newUser = new User(request.body);
		await newUser.save();
		return response.status(200).json(newUser);
	} catch (err) {
		return response.status(500).json(err.message);
	}
};



export const getUsers = async (request, response) => {
	try {
		const users = await User.find({});

		return response.status(200).json(users);

	} catch (error) {
		return response.status(200).json(error.message);
	}
};
