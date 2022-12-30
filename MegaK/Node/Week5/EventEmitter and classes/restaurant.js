const { EventEmitter } = require('events');

class Restaurant extends EventEmitter {
  /**
   * Otwarcie restauracji.
   */
  open() {
    this.emit('restaurantNew', 'Otwarto restaurację')   // Emit...
  }

  /**
   * Zamknięcie restauracji.
   */
  close() {
    this.emit('restaurantNew', 'Zamknięto restaurację')   // Emit...
  }

  /**
   * Stolik został zarezerowany na teraz.
   * Traktuj to jako po prostu 1 stolik mniej.
   */
  reserveTable() {
    this.emit('restaurantTablesRes', 'Dostępnych stolików:')    // Emit...
  }

  /**
   * Odwołano rezerwację na stolik.
   * Traktuj to jako po prostu 1 stolik więcej.
   */
  cancelTableReservation() {
    this.emit('restaurantTablesCanc', 'Dostępnych stolików:')   // Emit...
  }

  /**
   * Ktoś wziął stolik bez rezerwacji.
   */
  takeTableWithoutReservation() {
    this.emit('restaurantTablesRes', 'Dostępnych stolików:')   // Emit...
  }

  /**
   * Stolik się popsuł, odpadła noga :/
   */
  markTableAsBroken() {
    this.emit('restaurantTablesRes', 'Dostępnych stolików:')    // Emit...
  }

  /**
   * Ktoś skończył jeść, czyścimy stolik i wraca do użytku.
   */
  cleanupTable() {
    this.emit('restaurantTablesCanc', 'Dostępnych stolików:')    // Emit...
  }
}

module.exports = {
  Restaurant,
};