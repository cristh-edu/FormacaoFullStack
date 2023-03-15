import { definirCookie } from "../utils/cookies.js";

const socket = io();

socket.on("connect_error", (erro) => {
  alert(erro);
  window.location.href = "/login/index.html";
});

export function emitirAutenticarUsuario(dados) {
  socket.emit("autenticar_usuario", dados);
}

socket.on("autenticacao_sucesso", (tokenJWT) => {
  definirCookie("tokenJwt", tokenJWT);
  alert("Login realizado com sucesso!");
  window.location.href = "/";
});
socket.on("autenticacao_erro", () => alert("Senha incorreta!"));
socket.on("usuario_nao_encontrado", () => alert("Usuário não encontrado!"));
