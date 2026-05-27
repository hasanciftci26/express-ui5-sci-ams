import express from "express";

const port = Number(process.env.PORT) || 3000;
const app = express();

app.listen(port, () => {
    console.log("Express.js server is running on port: " + port);
});