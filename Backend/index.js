import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import cors from "cors";


dotenv.config();
const app = express();
app.use(cors());

const PORT = process.env.PORT || 4000;
const URI = process.env.mongoDBURI 

// Connect MongoDB
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.error("MongoDB Connection Error:", error.message);
    process.exit(1); // Exit the process on connection failure
});

//define routes
app.use("/book", bookRoute);


app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});

