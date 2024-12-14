import { Router } from "express";
import { handleChatRequest } from "./controllers/openai";

const router: Router = Router();

router.post("/chat", handleChatRequest);

export { router };
