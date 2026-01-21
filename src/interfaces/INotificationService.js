// src/interfaces/INotificationService.js
// Segregação de Interface: O sistema não precisa saber se é E-mail ou SMS
class INotificationService {
  send(message, user) { throw new Error("Método não implementado"); }
}