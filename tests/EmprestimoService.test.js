// tests/EmprestimoService.test.js
const EmprestimoService = require('../src/services/EmprestimoService');
const Livro = require('../src/entities/Livro');
const Usuario = require('../src/entities/Usuario');

describe('EmprestimoService', () => {
  let repoMock;
  let notificationMock;
  let service;

  beforeEach(() => {
    repoMock = { atualizar: jest.fn() };
    notificationMock = { send: jest.fn() };
    service = new EmprestimoService(repoMock, notificationMock);
  });

  test('Não deve permitir empréstimo para usuário com multa', () => {
    const usuario = new Usuario(1, 'João');
    usuario.multaPendentes = 10;

    const livro = new Livro(1, 'Engenharia de Software', 'Autor');

    expect(() => {
      service.realizarEmprestimo(usuario, livro);
    }).toThrow("Usuário com pendências financeiras.");
  });

  test('Deve realizar empréstimo com sucesso', () => {
    const usuario = new Usuario(2, 'Maria');
    const livro = new Livro(2, 'SOLID na Prática', 'Autor');

    service.realizarEmprestimo(usuario, livro);

    expect(livro.isDisponivel()).toBe(false);
    expect(repoMock.atualizar).toHaveBeenCalledWith(livro);
    expect(notificationMock.send).toHaveBeenCalled();
  });
});