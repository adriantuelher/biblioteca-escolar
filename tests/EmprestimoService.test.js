// tests/EmprestimoService.test.js
const EmprestimoService = require('../src/services/EmprestimoService');
const Livro = require('../src/entities/Livro');
const Usuario = require('../src/entities/Usuario');

describe('EmprestimoService', () => {
  let repoMock;
  let notifyMock;
  let service;

  // GQA: Configuração inicial para evitar repetição de código (Code Smell: Duplicated Code)
  beforeEach(() => {
    repoMock = { atualizar: jest.fn(), buscarPorId: jest.fn() };
    notifyMock = { send: jest.fn() };
    service = new EmprestimoService(repoMock, notifyMock);
  });

  test('Não deve permitir empréstimo para usuário com multa', () => {
    // Usando a classe real para garantir integridade, mas mockando o comportamento
    const usuarioComMulta = new Usuario(1, "João");
    usuarioComMulta.multaPendentes = 50; // Simulando multa
    
    const livro = new Livro(1, "Engenharia de Software", "Fowler");

    expect(() => {
      service.realizarEmprestimo(usuarioComMulta, livro);
    }).toThrow("Usuário com pendências financeiras.");
  });

  test('Deve alterar o status do livro para indisponível após empréstimo', () => {
    const livro = new Livro(1, "SOLID para Iniciantes", "Uncle Bob");
    const usuario = new Usuario(2, "Aluno Técnico");

    service.realizarEmprestimo(usuario, livro);

    expect(livro.isDisponivel()).toBe(false); 
    // GCO/GQA: Verifica se o repositório foi chamado para persistir a mudança
    expect(repoMock.atualizar).toHaveBeenCalledWith(livro);
  });
});