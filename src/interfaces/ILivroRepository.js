// src/interfaces/ILivroRepository.js

//  Interface de repositório de livros.
//  Define operações básicas de persistência.
 
class ILivroRepository {
  buscarPorId(id) {
    throw new Error("Método não implementado");
  }

  atualizar(livro) {
    throw new Error("Método não implementado");
  }
}

module.exports = ILivroRepository;