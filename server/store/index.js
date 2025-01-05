import { Chroma } from "@langchain/community/vectorstores/chroma";
import { loadDoc } from "../loader/index.js"
import { embedQuery } from "../embeddings/index.js";

const doc = await loadDoc()

const docEmbeddings = embedQuery(doc)

const vectorStore = new Chroma(docEmbeddings, {
  collectionName: "rag-collection",
});


export const doSimilaritySearch = async (query, k) => {
//  const queryEmbeddings = await embedQuery(query)
  const results = await vectorStore.similaritySearchVectorWithScore(query, k)
  return results
}