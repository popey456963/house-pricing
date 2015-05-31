function storeData(){
  var store = new Persist.Store("DataStore");

  var data = [{}]

  var loc = document.getElementById('loc').value
  var wage = document.getElementById('wage').value
  var children = document.getElementById('children').value
  var adults = document.getElementById('adults').value
  var rooms = document.getElementById('rooms').value

  store.set('location', loc);
  store.set('wage', wage);
  store.set('children', children);
  store.set('adults', adults);
  store.set('rooms', rooms);
}