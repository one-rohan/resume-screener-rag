import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";

export const embeddings = new GoogleGenerativeAIEmbeddings({
  model: "text-embedding-004", // 768 dimensions
  taskType: 'RETRIEVAL_DOCUMENT',
  title: "Document title",
  apiKey:'',
});

export const embedQuery = async (query) => {
    return await embeddings.embedQuery(query)
      // .then((response) => console.log(response));
}
