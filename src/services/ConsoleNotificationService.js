// src/services/ConsoleNotificationService.js
const INotificationService = require('../interfaces/INotificationService');

class ConsoleNotificationService extends INotificationService {
  send(message, user) {
    console.log(`Notificação para ${user.nome}: ${message}`);
  }
}

module.exports = ConsoleNotificationService;