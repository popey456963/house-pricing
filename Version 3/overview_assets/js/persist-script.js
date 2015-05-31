var store = new Persist.Store("DataStore");

var data = [{}]

store.get('location', function(ok, val) {
  if (ok)
    console.info('Location = ' + val);
	data.push({location: val})
});

store.get('wage', function(ok, val) {
  if (ok)
    console.info('Wage = ' + val);
	data.push({wage: val})
});

store.get('children', function(ok, val) {
  if (ok)
    console.info('Children = ' + val);
	data.push({children: val})
});

store.get('adults', function(ok, val) {
  if (ok)
    console.info('Adults = ' + val);
	data.push({adults: val})
});

store.get('rooms', function(ok, val) {
  if (ok)
    console.info('Rooms = ' + val);
	data.push({rooms: val})
});

console.log(data['1'].location);