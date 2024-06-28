import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/authRoute.js"
const app = express();

//Middleware
app.use(express.json());
dotenv.config();

//Routes 
app.use("/api/auth" , authRoute )


// home Route
app.get("/", async (req, res) => {
  res.json({ message: " welcome to code panda " });
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
