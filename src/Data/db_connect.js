import mongoose from "mongoose";

mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://samunogue:1234@clone-trello.kk4ecng.mongodb.net/")
const db = mongoose.connection
export default db;