// declaratie van de overview
const parkingOverview = document.getElementById('parking-overview');

const api_url = 'https://datatank.stad.gent/4/mobiliteit/bezettingparkingsrealtime.json';

fetch(api_url)
  .then(function (response) {
    // retourneer de response, vertaald naar een door JS-intepreteerbaar formaat
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    // doe iets met die data (netjes: via een andere functie)
    showParkingGent(data);
  })
  .catch(function (err) {
    // fout netjes afhandelen
    const errorElement = document.createElement('div');
    errorElement.className = 'error';
    errorElement.textContent = err;
    parkingOverview.appendChild(errorElement);
    console.log('Ai ai ai, an error', err);
  });


function showParkingGent(parkings) {
  // itereer door alle parkings
  for (const parking of parkings) {
    // create new div element
    let parkingElement = document.createElement('div');
    parkingElement.className = 'parking';

    // add a heading (vb Parking Sint-Michiels)
    let parkingHeading = document.createElement('h2');
    parkingHeading.textContent = parking.name;

    // create unordered list with list items inside
    let unorderedList = document.createElement('ul');

    let listitemCapacity = document.createElement('li');
    listitemCapacity.textContent = 'Capaciteit: ' + parking.parkingStatus.totalCapacity;
    unorderedList.appendChild(listitemCapacity);

    let listitemAvailable = document.createElement('li');
    listitemAvailable.textContent = 'Beschikbaar: ' + parking.parkingStatus.availableCapacity;
    unorderedList.appendChild(listitemAvailable);

    // add heading and list tot div element
    parkingElement.appendChild(parkingHeading); // add heading to div
    parkingElement.appendChild(unorderedList);

    // add div to overview
    parkingOverview.appendChild(parkingElement);
  }

}