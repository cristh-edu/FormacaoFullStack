import { randomBytes, scryptSync, timingSafeEqual } from "crypto";

export default function autenticarUsuario(senhaDigitada, usuario) {
  const hashTeste = scryptSync(senhaDigitada, usuario.salSenha, 64);
  const hashReal = Buffer.from(usuario.hashSenha, "hex");
  return timingSafeEqual(hashReal, hashTeste);
}
