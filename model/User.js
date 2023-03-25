import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
	iss: {
		type: String,
	},

	nbf: {
		type: Number,
	},

	aud: {
		type: String,
	},

	sub: {
		type: String,
		required: true,
	},

	email: {
		type: String 
	},

	email_verified: {
		type: Boolean,
	},

	name: {
		type: String,
		required: true,
	},

	picture: {
		type: String,
	},
	jti: {
		type: String,
	},
	given_name: {
		type: String,
	},
	family_name: {
		type: String,
	},

	iat: {
		type: Number,
	},
	exp: {
		type: Number,
	},
});

const user = mongoose.model("users", UserSchema);

export default user;
