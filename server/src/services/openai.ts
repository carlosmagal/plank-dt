import { openai } from "../config/openai";

import { openaiErrorStatusHandler } from "../middlewares/errorHandler";

const sendMessageToOpenAI = async (prompt: string) => {
  try {
    const content = `Considering the following piece of code, return to me: 
    A natural-language explanation of what the code does.
    A refactored version of the code.
    A step-by-step reasoning of how the explanation was derived.
    Code:
    ${prompt}
    `;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content }],
    });

    console.log(response);
    console.log(response?.choices?.at(0)?.message);

    return response?.choices?.at(0)?.message;
  } catch (error: any) {
    openaiErrorStatusHandler(error);
  }
};

export { sendMessageToOpenAI };
