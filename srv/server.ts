import express from "express";
import employeeRouter from "./router/employee.js";
import authMiddleWare from "./middleware/auth.js";

const port = Number(process.env.PORT) || 4004;
const app = express();

// JSON and Auth Middlewares
app.use(express.json());
app.use(authMiddleWare);

// Routers
app.use("/employee", employeeRouter);

app.listen(port, () => {
    console.log("Express.js server is running on port: " + port);
});