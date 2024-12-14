import { Request, Response, NextFunction } from "express";
import { sendMessageToOpenAI } from "../services/openai";

const handleChatRequest = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { prompt } = req.body;

  if (!prompt) {
    res.status(400).json({ message: "Prompt is required" });
    return;
  }

  try {
    const response = await sendMessageToOpenAI(prompt);
    res.json(response);
  } catch (error) {
    next(error);
  }
};

export { handleChatRequest };
