// Our team wants to offer customers the ability to request on-demand showings, where a
// showing agent drives to a chosen property at a certain time and shows the property to
// the potential buyers. To create the system that routes requests to agents who are
// nearby, we need to know the driving distance from a given showing agent’s location to
// the given property. The team is considering using the Google Distance Matrix API
// [https://developers.google.com/maps/documentation/distance-matrix/]
// Your job is to create a wrapper that makes the API easy to use. As a minimal
// implementation, we’d like something that takes as arguments:

// - A single origin - an address formatted as a string, e.g. “2301 Hyperion Ave., Los
// Angeles, CA 90027”
// - A single destination formatted in the same way
// The wrapper should return a number that represents the driving distance in miles.
// Implement the minimal version. 

require('es6-promise').polyfill();
require('isomorphic-fetch');

/**
 * @param {string} origin - string of origin location. 
 * @param {string} destination - string of destination location.
 * @param {string} apiKey - Google's API key to use their API 
 * @returns {string} - distance between origin and destination in miles. 
 */
async function findDistance(origin, destination, apiKey) {
  const url = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin}&destinations=${destination}&key=${apiKey}`;
  return await fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    return myJson.rows[0].elements[0].distance.text;
  });
}

// Example. Insert API key for example to work
const distance = findDistance('2301 Hyperion Ave., Los Angeles, CA 90027', 'Walt Disney World Resort, Orlando, FL 32830', 'INSERT API KEY');
distance.then(distance => console.log('distance', distance))

// If you were going to continue implementing a more feature rich version of this wrapper,
// what other features would be useful?

// Since the goal is to route requests to agents who are nearby, a more feature rich version of this 
// wrapper would take in an array of agents with their locations, and the destination. With this 
// information the wrapper could have a function that iterates through the agents and finds the agent 
// closest to the destination, or more preferably, the agent with the shortest drive time. Once an agent 
// is found, the Google Directions API could be used to provide directions to the nearby agent. 