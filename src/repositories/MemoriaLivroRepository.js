// src/repositories/MemoriaLivroRepository.js
const ILivroRepository = require('../interfaces/ILivroRepository');

class MemoriaLivroRepository extends ILivroRepository {
  constructor() {
    super();
    this.livros = [];
  }

  buscarPorId(id) {
    return this.livros.find(livro => livro.id === id);
  }

  atualizar(livro) {
    const index = this.livros.findIndex(l => l.id === livro.id);
    if (index >= 0) {
      this.livros[index] = livro;
    } else {
      this.livros.push(livro);
    }
  }
}

module.exports = MemoriaLivroRepository;