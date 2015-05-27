var ctx = document.getElementById("overviewChart").getContext("2d");

var data = [
	/*
	Possible Colour Codes
	#369EAD | #72BBC6
	#C24642 | #C85855
	#7F6084 | #8C7090
	#86B402 | #92BC1B
	#A2D1CF | #ABD6D4
	#C8B631 | #CEBD46
	#6DBCEB | #7CC3ED
	#52514E | #636260
	#4F81BC | #618EC3
	#A064A1 | #AA74AA
	#F79647 | #F8A059
	#4F81BC | #618EC3
	#C0504E | #C66260
	#9BBB58 | #A5C269
	#23BFAA | #39C5B2
	#8064A1 | #8D74AA
	#4AACC5 | #5CB4CB
	#F79647 | #F8A059
	#33558B | #476697
	*/
    {
        value: 300,
        color:"#369EAD",
        highlight: "#4AA8B5",
        label: "Mortgage"
    },
    {
        value: 50,
        color: "#C24642",
        highlight: "#C85855",
        label: "Leisure"
    },
    {
        value: 100,
        color: "#7F6084",
        highlight: "#8C7090",
        label: "Shopping"
    },
    {
        value: 40,
        color: "#86B402",
        highlight: "#92BC1B",
        label: "Amenities"
    },
    {
        value: 120,
        color: "#A2D1CF",
        highlight: "#ABD6D4",
        label: "Repairs"
    }
]

var overviewChart = new Chart(ctx).Doughnut(data);
