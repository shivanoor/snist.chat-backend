import mongoose from "mongoose";

import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async () => {
	const url = `mongodb://${USERNAME}:${PASSWORD}@ac-wgm4ez0-shard-00-00.6n7wajr.mongodb.net:27017,ac-wgm4ez0-shard-00-01.6n7wajr.mongodb.net:27017,ac-wgm4ez0-shard-00-02.6n7wajr.mongodb.net:27017/?ssl=true&replicaSet=atlas-vzhcza-shard-0&authSource=admin&retryWrites=true&w=majority`;

	try {
		await mongoose.connect(url, { useUnifiedTopology: true });
		console.log("Database connected successfully");
	} catch (error) {
		console.log("Error while connection to database " + error.message);
	}
};

export default Connection;
