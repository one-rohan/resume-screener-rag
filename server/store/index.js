import { Chroma } from "@langchain/community/vectorstores/chroma";
import { loadDoc } from "../loader/index.js"
import { embeddings, embedQuery } from "../embeddings/index.js";

const doc = await loadDoc()

// const docEmbeddings = embedQuery(doc)

export const doSimilaritySearch = async (query, k) => {
  const vectorStore = new Chroma(embeddings, {
    collectionName: "rag-collection-1",
  });
  // return vectorStor
//  const queryEmbeddings = await embedQuery(query)
  vectorStore.addDocuments(doc)
  const queryEmbeddings = await embedQuery(query).then((res) => {
    return res
 })
  const results = await vectorStore.similaritySearchVectorWithScore(queryEmbeddings, k)
  return results
}