// src/interfaces/INotificationService.js

// Interface de serviço de notificação.
// Define o contrato para envio de notificações.
// Pode ser implementado por Email, SMS, etc.
class INotificationService {
  send(message, user) {
    throw new Error("");
  }
}

module.exports = INotificationService;
