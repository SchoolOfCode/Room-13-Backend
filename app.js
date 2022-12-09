import express from "express";
const PORT = process.env.PORT;
import cors from "cors";


import {router}from "./routes/todolist.js"

const app = express();
app.use(express.json());
app.use(express.static("public"));
app.use(cors("*"));
app.use("/api/todo", router);

app.listen(PORT, function () {
	console.log(`Server is running on port ${PORT}`);
});

export default app;