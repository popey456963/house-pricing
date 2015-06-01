var results;
var latestDate;

function hideDiv(id) {
    var div = document.getElementById(id);
    div.style.display = "none";
}

function showDiv(id) {
    var div = document.getElementById(id);
    div.style.display = "inline";
}

function continueLocation() {
    hideDiv("locationInput");
    showDiv("intermediaryDiv");
    getLocationData(document.getElementById("loc").value);
}

function continueIntermediary() {
    showDiv("otherInput");
    hideDiv("intermediaryDiv");
}

function continueOtherInput() {
    getPriceOfRoom();
}

function setup() {
    hideDiv("otherInput");
    hideDiv("intermediaryDiv");
}

function getLocationData(loc) {
    var url = "http://api.nestoria.co.uk/api?encoding=json&pretty=1&action=metadata&place_name=" + loc + "&country=uk";
    var queryURL = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20json%20where%20url%3D'" + encodeURIComponent(url) + "'&format=json&diagnostics=true&callback="
    $.getJSON(queryURL, function(data) {
        console.info("Completed Get From " + queryURL);
        results = data.query.results.json.response;
        sizes = getPossibleSizes(results);
        console.info("Completed Room Size Search, Response = " + sizes);
        addOptionsToDropdown(sizes);
        continueIntermediary();
    })
}

function getPossibleSizes() {
    latestDate = "_" + results.most_recent_month.substring(1);
    response = [];
    for (i = 0; i < results.metadata.length; i++) {
        response.push(results.metadata[i].num_beds + "|" + results.metadata[i].listing_type);
    }
    return response;
}

function addOptionsToDropdown(sizes) {
    dropdown = document.getElementById('rooms');
    for (i = 0; i < sizes.length; i++) {
        temp = sizes[i].split("|");
        if (temp[0] == 1) {
            humanReadable = capitalizeFirstLetter(temp[1]) + " " + temp[0] + " room"
        } else {
            humanReadable = capitalizeFirstLetter(temp[1]) + " " + temp[0] + " rooms"
        }
        dropdown.options[dropdown.options.length] = new Option(humanReadable, sizes[i]);

    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getPriceOfRoom() {
    var roomSize = document.getElementById("rooms").value;
    var roomArray = roomSize.split("|");
    //Idiot below.
    if (roomArray[0] != "all") {
        if (roomArray[1] == "rent") {
            var arrayPlacement = ((parseInt(roomArray[0]) - 1) * 2)
        } else {
            var arrayPlacement = ((parseInt(roomArray[0]) - 1) * 2) + 1
        }
    } else {
        if (roomArray[1] == "rent") {
            var arrayPlacement = 10;
        } else {
            var arrayPlacement = 11;
        }
    }
    roomPrice = results.metadata[arrayPlacement].data[latestDate].avg_price;
    console.log(roomPrice);
}
