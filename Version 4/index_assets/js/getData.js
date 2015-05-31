var results;
var latestMonth;
var rooms = [];

function getData(loc){
	var url="http://api.nestoria.co.uk/api?encoding=json&pretty=1&action=metadata&place_name=" + loc + "&country=uk";
	var queryURL="https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20json%20where%20url%3D'" + encodeURIComponent(url) + "'&format=json&diagnostics=true&callback="
	$.getJSON(queryURL, function(data){
		console.log("Got some data from " + queryURL + "!");
		results = data.query.results.json.response.metadata;
		latestMonth = data.query.results.json.response.most_recent_month;
		getPossibleRooms();
	})
	
}

function getPossibleRooms(){
	for(i=0;i<results.length;i++)
	{
		console.group();
		console.log("Number of Beds = " + results[i].num_beds);
		console.log("Rent or Buy = " + results[i].listing_type);
		console.log("Latest Price = " + results[i].data["_" + latestMonth.substring(1)].avg_price + " pounds");
		console.groupEnd();
		rooms.push({"bed":results[i].num_beds,  "type":results[i].listing_type, "price":results[i].data["_" + latestMonth.substring(1)].avg_price});
	}
	jsondata = JSON.stringify(rooms);
	console.log(rooms);
	storeRooms();
	loadRooms();
}
getData(loc);
