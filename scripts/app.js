// declaratie van de overview
const parkingOverview = document.getElementById('parking-overview');


fetch('REPLACE-THIS-WITH-CORRECT-JSON-DATA-UR')
  .then(function(response) {
    // retourneer de response, vertaald naar een door JS-intepreteerbaar formaat
  })
  .then(function(data) {
    console.log(data);
    // doe iets met die data (netjes: via een andere functie)
    showParkingGent(data);
  })
  .catch(function(err) {
    console.log('Ai ai ai, an error', err);
  });


  function showParkingGent(parkings){
        // itereer door alle parkings
        for(const parking of parkings) {  
          // haal de noodzakelijke properties uit het parking-object

          // plaats ze in de dom (zie voorbeeld in html)

      }

  }



