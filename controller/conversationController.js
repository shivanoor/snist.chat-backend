import mongoose from "mongoose";

import conversation from "../model/Conversation.js";

export const setConversation = async (request, response) => {
	try {
		const senderId = request.body.senderId;
		const recieverId = request.body.recieverId;

		let conversationExists = await conversation.findOne({
			members: { $all: [senderId, recieverId] },
		});
		if (conversationExists) {
			response.status(200).json({
				msg: "Conversation already Exists",
			});
			return;
		}

		const newConversation = new conversation({
			members: [recieverId, senderId],
		});
		await newConversation.save();
		return response.status(200).json(newConversation);
	} catch (err) {
		return response.status(500).json(err.message);
	}
};

export const getConversation = async (request, response) => {
	const senderId = request.body.senderId;
	const recieverId = request.body.recieverId;
	try {
		let Conversation = await conversation.findOne({
			members: { $all: [senderId, recieverId] },
		});
		return response.status(200).json(Conversation);
	} catch (error) {
		return response.status(500).json(error.message);
	}
};
