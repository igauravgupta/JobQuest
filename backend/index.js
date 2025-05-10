import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
import healthCheck from "./routes/healthCheck.routes.js";

dotenv.config({});

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

const corsOptions = {
    origin:'https://skill-op.netlify.app',
    credentials:true
}


// const corsOptions = {
//     origin:'http://localhost:5173',
//     credentials:true
// }

app.use(cors(corsOptions));
app.use(express.static("./public"));


const PORT = process.env.PORT || 8000;


// api's
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);
app.use("/api/v1/health", healthCheck);

// health check route
// https://jobquest-my-academic-projects.up.railway.app/api/v1/health/health



app.listen(PORT,()=>{
    connectDB();
    console.log(`Server running at port ${PORT}`);
})