import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import Connection from "./database/db.js";
import route from "./routes/route.js";
import dotenv from "dotenv";
import path from "path";

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", route);

// ----------Deployment

const __dirname1 = path.resolve();
if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname1, "/client/build")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname1, "client", "build", "index.html"));
	});
} else {
	app.listen(PORT, () => {
		console.log("server Successfully running on port " + PORT);
	});
}


//----Deployment

Connection();

const PORT = 8000;

app.listen(PORT, () => {
	console.log("server Successfully running on port " + PORT);
});
