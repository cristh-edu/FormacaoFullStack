import jwt from "jsonwebtoken";

export default function gerarJwt(payload) {
  return jwt.sign(payload, process.env.SEGREDO_JWT, {
    expiresIn: "1h",
  });
}
