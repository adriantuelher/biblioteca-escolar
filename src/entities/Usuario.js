// src/entities/Usuario.js
class Usuario {
  constructor(id, nome) {
    this.id = id;
    this.nome = nome;
    this.multaPendentes = 0;
  }

  temMultas() {
    return this.multaPendentes > 0;
  }
}

module.exports = Usuario;