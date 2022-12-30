const { Restaurant } = require('./restaurant');
let tablesCount = 25;
const megaRestaurant = new Restaurant();


// Tutaj dodaj nasłuchiwanie
megaRestaurant
  .on('restaurantNew', data => {
    console.log(data)
  })
  .on('restaurantTablesRes', data => {
    tablesCount = tablesCount - 1;
    console.log(data, tablesCount);
  })
  .on('restaurantTablesCanc', data => {
    tablesCount = tablesCount + 1;
    console.log(data, tablesCount);
  });


megaRestaurant.open(); // "Otwarto restaurację."

megaRestaurant.takeTableWithoutReservation(); // "Dostepnych stolików: 24."

megaRestaurant.takeTableWithoutReservation(); // "Dostepnych stolików: 23."

megaRestaurant.reserveTable(); // "Dostepnych stolików: 22."

megaRestaurant.cancelTableReservation(); // "Dostepnych stolików: 23."

megaRestaurant.reserveTable(); // "Dostepnych stolików: 22."

megaRestaurant.reserveTable(); // "Dostepnych stolików: 21."

megaRestaurant.takeTableWithoutReservation(); // "Dostepnych stolików: 20."

megaRestaurant.takeTableWithoutReservation(); // "Dostepnych stolików: 19."

megaRestaurant.cleanupTable(); // "Dostepnych stolików: 20."

megaRestaurant.close(); // "Zamknięto restaurację."