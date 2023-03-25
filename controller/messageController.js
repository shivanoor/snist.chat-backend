import Message from "../model/Message.js";

import conversation from "../model/Conversation.js";

export const newMessage = async (request, response) => {
	try {
		const newMessage = Message(request.body);

		await newMessage.save();
		await conversation.findByIdAndUpdate(request.body.conversationId, {
			message: request.body.text,
		});

		return response.status(200).json("message has been sent Succesffully");
	} catch (error) {
		return response.status(500).json(error.message);
	}
};

export const getMessages = async (request, response) => {
	try {
		const messages = await Message.find({ conversationId: request.params.id });
		return response.status(200).json(messages);
	} catch (error) {
		return response.status(500).json(error.message);
	}
};
