import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import userRoute from "./src/routes/user.routes.js";
import companyRoute from "./src/routes/company.routes.js";
import jobRoute from "./src/routes/job.routes.js";
import applicationRoute from "./src/routes/application.routes.js";
import healthCheck from "./src/routes/healthCheck.routes.js";

dotenv.config({});

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

//CORS configuration
const corsOptions = {
    origin: process.env.ORIGIN,
    credentials:true
}

app.use(cors(corsOptions));
app.use(express.static("./public"));


const PORT = process.env.PORT || 8000;


// api's
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);
app.use("/api/v1/health", healthCheck);




app.listen(PORT,()=>{
    connectDB();
    console.log(`Server running at port ${PORT}`);
})