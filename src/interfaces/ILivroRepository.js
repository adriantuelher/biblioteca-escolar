// src/interfaces/ILivroRepository.js (Abstração)
class ILivroRepository {
  buscarPorId(id) { throw new Error("Método não implementado"); }
  atualizar(livro) { throw new Error("Método não implementado"); }
}

module.exports = ILivroRepository;