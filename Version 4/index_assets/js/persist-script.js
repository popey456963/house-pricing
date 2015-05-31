function storeData(idname) {
    var store = new Persist.Store("DataStore");

    var data = document.getElementById(idname).value;

    store.set(idname, data);
}

var loc;

function loadLoc() {
    var store = new Persist.Store('DataStore');
    
    store.get('loc', function(ok, val) {
        if (ok)
            console.info('Location = ' + val);
        loc = val
    });
}

loadLoc();