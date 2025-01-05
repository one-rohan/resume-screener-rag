import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";

const embeddings = new GoogleGenerativeAIEmbeddings({
  model: "text-embedding-004", // 768 dimensions
  taskType: 'RETRIEVAL_DOCUMENT',
  title: "Document title",
  apiKey:'AIzaSyBhMigDApxkeXdQ2Z8paz57hbv1M8MCSWI'
});

export const embedQuery = async (query) => {
    await embeddings.embedQuery(query)
      // .then((response) => console.log(response));
}
