import { loadDoc } from "./loader/index.js";
import { invokeLLM } from "./model/index.js";
import {doSimilaritySearch} from "./store/index.js";
import { ChatPromptTemplate } from "@langchain/core/prompts";

const doc = await loadDoc()
// const sim_res = doSimilaritySearch("Which organizations has Dinesh worked for?", 5)

// console.log(sim_res.then((res) => console.log(res)))

const promptTemplate = ChatPromptTemplate.fromMessages([
    ["user", "You are provided resume/CV data. Answer the question based on this context - {context} --- Now answer this question: {question}"],
  ]);

const prompt = await promptTemplate.invoke({
  context: doc,
  question: "Find a candidate who has worked at Google",
});

invokeLLM(prompt)