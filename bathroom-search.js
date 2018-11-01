/**
 * 
 * @param {int} totalBathrooms - total number of possible steak houses in city
 * @param {array} allBathrooms - array of pairs representing the x and y coordinates
 * @param {int} numSteakhouses - number of nearby steak houses that will be returned
 */
function findNearbyBathrooms(totalBathrooms, allBathrooms, numSteakhouses)
{
  function BathroomLinkedList() {
    this.closest = null;
    this.furthest = null;
    this.steakhouseCount = 0; 
  }
  function Bathroom(distance, coordinates) {
    this.distance = distance;
    this.coordinates = coordinates;
    this.next = null;
  }

  var nearbyBathrooms = new NearbyBathrooms(); 
  allBathrooms.forEach(coordinates => {
    var distance = Math.sqrt(Math.pow(coordinates[0], 2) + Math.pow(coordinates[1], 2)) 
    if (!nearbyBathrooms.closest) {
      nearbyBathrooms.closest = new SteakHouse(distance, coordinates);
      nearbyBathrooms.furthest = new SteakHouse(distance, coordinates);
      nearbyBathrooms.steakhouseCount = 1;
    }
    else {
      var pointer = nearbyBathrooms.closest
      while (pointer.distance < distance && pointer.next) {
        pointer = pointer.next; 
      }
      // need to finish the below functionality
      if (nearbyBathrooms) {

      }
    }
  })
}


findNearbyBathrooms(3, [[1,2], [3,4], [1, -1]], 2)


