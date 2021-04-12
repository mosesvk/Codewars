// answer 

function itinerary(travel) {
  // here your code
  return travel
    .reduce((acc, port) => 
      [...acc, ...(acc.includes(port.in) ? [] : [port.in]), port.out]
  , [])
    .join('-')
}

// Long For loop answer

function itinerary(travel) {
  const result = [];
  let prevAirport = '';
  for (let i = 0; i < travel.length; i++) {
    if (travel[i].in !== prevAirport)
      result.push(travel[i].in);
    result.push(prevAirport = travel[i].out);
  }
  return result.join('-');
}