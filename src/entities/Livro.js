// src/entities/Livro.js
class Livro {
  constructor(id, titulo, autor) {
    this.id = id;
    this.titulo = titulo;
    this.autor = autor;
    this.disponivel = true;
  }

  isDisponivel() {
    return this.disponivel;
  }

  setDisponibilidade(status) {
    this.disponivel = status;
  }
}

module.exports = Livro;