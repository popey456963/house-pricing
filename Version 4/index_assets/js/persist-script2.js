function storeRooms() {
    var store = new Persist.Store("DataStore");

    store.set("rooms", jsondata);
}

var nonJSONData;

function loadRooms() {
    var store = new Persist.Store("DataStore");

    store.get('rooms', function(ok, val) {
        if (ok)
            console.info('Rooms = ' + val);
    nonJSONData = JSON.parse(val);
    console.log(nonJSONData);
    });
}
