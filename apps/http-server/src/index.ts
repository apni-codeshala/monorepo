import express from "express";
import { client } from "@repo/db/client";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const user = client.user.create({
        data: {
            username: username,
            password: password

        }
    });
    res.json({
        status: true,
        message: "Signup successful",
        id: user
    })
})

app.listen(3002, () => {
    console.log("Server is running on port 3002");
});