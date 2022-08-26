const distance1 = { lon: -0.2980494, lat: 51.589386 };
const distance2 = { lon: -0.3915597, lat: 51.6881496 };
const distance3 = { lon: -0.3916348018600502, lat: 51.68980240521216 };
const distance4 = { lon: -0.40478639444950204, lat: 51.6884384313947 };

function getDistanceFromLatLonInKm(loc1, loc2) {
  const RADIUS = 6371; // Radius of the earth in km
  let dLat = deg2rad(loc2.lat - loc1.lat); // deg2rad below
  let dLon = deg2rad(loc2.lon - loc1.lon);
  let a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(loc1.lat)) *
      Math.cos(deg2rad(loc2.lat)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  let distanceKm = RADIUS * c; // Distance in km
  return distanceKm;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}
