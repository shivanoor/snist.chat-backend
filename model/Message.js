import mongoose from "mongoose";

const messageSchema = mongoose.Schema(
	{
		conversationId: {
			type: String,
		},

		senderId: {
			type: String,
		},

		recieverId: {
			type: String,
		},
		text: {
			type: String,
		},
		type: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);

const Message = mongoose.model("messages", messageSchema);

export default Message;
