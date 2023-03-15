import { documentosColecao } from "./dbConnect.js";

export function obterDocumentos() {
  return documentosColecao.find().toArray();
}

export function adicionarDocumento(nome) {
  return documentosColecao.insertOne({ nome, texto: "" });
}

export function encontrarDocumento(nome) {
  return documentosColecao.findOne({ nome });
}

export function atualizaDocumento(nome, texto) {
  return documentosColecao.updateOne({ nome }, { $set: { texto } });
}

export function excluirDocumento(nome) {
  return documentosColecao.deleteOne({ nome });
}
