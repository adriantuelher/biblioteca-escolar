// src/services/EmprestimoService.js
class EmprestimoService {
  constructor(repo, notification) {
    this.repo = repo;           // DIP: Depende da abstração do repositório
    this.notification = notification; // DIP: Depende da abstração de notificação
  }

  realizarEmprestimo(usuario, livro) {
    // Regra de Negócio (GRE)
    if (usuario.temMultas()) {
      throw new Error("Usuário com pendências financeiras.");
    }

    if (!livro.isDisponivel()) {
      throw new Error("Livro já se encontra emprestado.");
    }

    // Atualização de Estado
    livro.setDisponibilidade(false);
    
    // GCO: Persistência da alteração
    this.repo.atualizar(livro);

    // GQA: Notificação do sucesso
    this.notification.send(`Empréstimo do livro "${livro.titulo}" confirmado.`, usuario);
  }
}

module.exports = EmprestimoService;