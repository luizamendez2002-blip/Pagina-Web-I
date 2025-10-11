import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = "TU_API_KEY_AQUI"; // 🔹 Reemplaza con tu key

app.post("/chat", async (req, res) => {
  const userText = req.body.message;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": Bearer ${API_KEY}
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: userText }]
    })
  });

  const data = await response.json();
  res.json(data);
});

app.listen(3000, () => console.log("Servidor corriendo en http://localhost:3000"));