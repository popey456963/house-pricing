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

function continueOtherInput() {

}

function setup() {
    hideDiv("otherInput");
    hideDiv("intermediaryDiv");
}

function getLocationData(loc) {
	var queryURL="https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20json%20where%20url%3D'" + encodeURIComponent("http://api.nestoria.co.uk/api?encoding=json&pretty=1&action=metadata&place_name=" + loc + "&country=uk") + "'&format=json&diagnostics=true&callback="
	$.getJSON(queryURL, function(data){
		console.log("Got some data from " + queryURL + "!");
		results = data.query.results.json.response;
	})
}
