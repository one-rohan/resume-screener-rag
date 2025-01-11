import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

const llm = new ChatGoogleGenerativeAI({
  model: "gemini-1.5-pro",
  temperature: 0,
  maxRetries: 2,
  apiKey: process.env.GOOGLE_API_KEY
});


export const invokeLLM = async (msgs) => {
    const aiMsg = await llm.invoke(msgs);
      console.log(aiMsg);
}


