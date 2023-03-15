import { cadastrarUsuario, encontrarUsuario } from "../db/usuariosDb.js";

export default function registrarEventosCadastro(socket, io) {
  socket.on("cadastrar_usuario", async (dados) => {
    const usuario = await encontrarUsuario(dados.nome);
    if (usuario === null) {
      const resultado = await cadastrarUsuario(dados);

      socket.emit(
        resultado.acknowledged ? "cadastro_sucesso" : "cadastro_erro"
      );
    } else socket.emit("usuario_ja_existente");
  });
}
