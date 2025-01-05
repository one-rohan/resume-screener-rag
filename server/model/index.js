import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

const llm = new ChatGoogleGenerativeAI({
  model: "gemini-1.5-pro",
  temperature: 0,
  maxRetries: 2,
  apiKey: "",
  // other params...
});


export const invokeLLM = async (msgs) => {
    const aiMsg = await llm.invoke(msgs);
      console.log(aiMsg);
}


