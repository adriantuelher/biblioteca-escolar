// src/services/EmprestimoService.js
class EmprestimoService {
  constructor(livroRepository, notificationService) {
    this.livroRepository = livroRepository;
    this.notificationService = notificationService;
  }

  realizarEmprestimo(usuario, livro) {
    if (usuario.temMultas()) {
      throw new Error("Usuário com pendências financeiras.");
    }

    if (!livro.isDisponivel()) {
      throw new Error("Livro já se encontra emprestado.");
    }

    livro.setDisponibilidade(false);
    this.livroRepository.atualizar(livro);

    this.notificationService.send(
      `Empréstimo do livro "${livro.titulo}" confirmado.`,
      usuario
    );
  }
}

module.exports = EmprestimoService;