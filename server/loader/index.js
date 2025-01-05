import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";

const resumePath = "../data/resume_pdfs/resume.pdf"

const loader = new PDFLoader(resumePath);

export const loadDoc = async () => {
  const docs = await loader.load();
  // console.log(docs[0].pageContent)
  return docs[0].pageContent
}