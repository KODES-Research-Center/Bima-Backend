import express from "express";
import userRoutes from "./routes/userRoutes";
import "./config/env";

const app = express();
app.use(express.json());
app.use("/api/users", userRoutes);
app.listen(process.env.PORT || 3000);
