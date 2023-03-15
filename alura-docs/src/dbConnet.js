import { MongoClient } from "mongodb";

const cliente = new MongoClient(
  "mongodb+srv://cristh:teste123@aluracluster.bqimwlq.mongodb.net/?retryWrites=true&w=majority"
);

let documentosColecao;

try {
  await cliente.connect();
  const db = cliente.db("alura-websockets");
  documentosColecao = db.collection("documentos");
  console.log("Conectado!");
} catch (error) {
  console.log(error);
}

export { documentosColecao };
