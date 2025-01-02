require("dotenv").config({ path: ".env.development" });
const express = require("express");
const OpenAI = require("openai");
const taskBreakdownInstructions = require("../src/content/instructions.js");
const cors = require("cors");
const pool = require("./db.js");
const insertProject = require("./lib.js");

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const app = express();
const PORT = 4000;

app.use(
    cors({
        origin: "http://localhost:3000",
    })
);

app.use(express.json());

app.post("/api/generatetasks", async (req, res) => {
    const { name, description, timeframe } = req.body.formData;

    const projectData = {
        name,
        description,
        timeframe,
        userId: "5bf5ede6-5287-474a-9f39-f4f22e9b7883",
    };

    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: taskBreakdownInstructions,
                },
                {
                    role: "user",
                    content: `A new project has arrived! Here are the details.
                    Name: ${name}, Description: ${description}, Timeframe: ${timeframe}`,
                },
            ],
            response_format: { type: "json_object" },
        });

        const tasks = JSON.parse(completion.choices[0].message.content);

        const insertProjectResult = await insertProject(
            projectData,
            tasks.tasks
        );

        res.status(200).json(insertProjectResult);
    } catch (err) {
        console.log(err);
    }
});

app.listen(PORT, () => {
    console.log("Server running on port ", PORT);
});
