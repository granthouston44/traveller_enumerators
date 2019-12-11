const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  let journeysArray = this.journeys;
  return journeysArray.map((journey) => {
    return journey.startLocation;
  })
};

Traveller.prototype.getJourneyEndLocations = function () {
  let journeysArray = this.journeys;
  return journeysArray.map((journey) => {
    return journey.endLocation;
  })
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  let journeysArray = this.journeys;
  return journeysArray.filter((journey) => {
    return journey.transport === transport;
  })
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  let journeysArray = this.journeys;
  return journeysArray.filter((journey) => {
    return journey.distance > minDistance;
  })
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  let journeysArray = this.journeys;
  return journeysArray.reduce((total, journey) => {
    return total + journey.distance;
  }, 0)
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  let journeysArray = this.journeys;
  let distinctTransport;
  return distinctTransport = [...new Set(journeysArray.map((journey) => {
    return journey.transport
  }))];
};



module.exports = Traveller;
