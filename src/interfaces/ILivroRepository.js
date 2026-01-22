// src/interfaces/ILivroRepository.js

//  Interface de repositório de livros.
//  Define operações básicas de persistência.
 
class ILivroRepository {
  buscarPorId(id) {
    throw new Error("");
  }

  atualizar(livro) {
    throw new Error("");
  }
}

module.exports = ILivroRepository;