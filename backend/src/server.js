import express from "express";
import multer from "multer";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import { analyzeTextAI, analyzeImageAI } from "./aiService.js";
import { validateText, validateImage } from "./validators.js";

const app = express();
app.use(express.json());
app.use(cors(
  {
    origin: "https://truth-lens-frontend-deploy-msl4z6v15-catchers-projects-0dd9fc92.vercel.app",
  }
));
const upload = multer({ storage: multer.memoryStorage() });
// POST /api/analyze-text
app.post("/api/analyze-text", validateText, async (req, res) => {
  const { text, model } = req.body;

  try {
    const result = await analyzeTextAI(
      `
Przeanalizuj poniższy tekst pod kątem wiarygodności, ryzyka i flag.
Zwróć TYLKO JSON o strukturze:
{
 "credibilityScore": number,
 "riskLevel": string,
 "flags": string[],
 "explanation": string,
 "advice": string,
 "truth" : string,
}
gdzie credibilityScore to liczba od 0 do 100, 
a riskLevel to jedna z wartości: "niski", "średni", "wysoki".
TEXT: ${text}
    `,
      model
    );

    res.json(result);
  } catch (err) {
    if (err.message === "AI_TIMEOUT_OR_FAILURE") {
      return res.status(504).json({ error: "AI timeout or failure" });
    }
    res.status(500).json({ error: "Server error" });
  }
});

// POST /api/analyze-image
app.post(
  "/api/analyze-image",
  upload.single("image"),
  validateImage,
  async (req, res) => {
    const base64 = req.file.buffer.toString("base64");
    const model = "pro";
    try {
      const result = await analyzeImageAI(base64, model);
      res.json(result);
    } catch (err) {
      if (err.message === "AI_TIMEOUT_OR_FAILURE") {
        return res.status(504).json({ error: "AI timeout or failure" });
      }
      res.status(500).json({ error: "Server error" });
    }
  }
);

app.listen(process.env.PORT, () => {
  console.log("Server running on port " + process.env.PORT);
});
