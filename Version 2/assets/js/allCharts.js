var ctx = document.getElementById("overviewChart").getContext("2d");

var options =
{
    /*onAnimationComplete: function () {
        this.showTooltip(this.segments, true);
    },*/        
    animation: false
}


var data = [
    /*
    Possible Colour Codes
    !#369EAD | #72BBC6
    !#C24642 | #C85855
    !#7F6084 | #8C7090
    !#86B402 | #92BC1B
    !#A2D1CF | #ABD6D4
    !#C8B631 | #CEBD46
    !#6DBCEB | #7CC3ED
    !#52514E | #636260
    !#4F81BC | #618EC3
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
        value: 29,
        color: "#369EAD",
        highlight: "#4AA8B5",
        label: "Compulsary Deductions"
    }, {
        value: 16,
        color: "#C24642",
        highlight: "#C85855",
        label: "Housing and Energy"
    }, {
        value: 10,
        color: "#7F6084",
        highlight: "#8C7090",
        label: "Savings"
    }, {
        value: 10,
        color: "#86B402",
        highlight: "#92BC1B",
        label: "Other Goods and Services"
    }, {
        value: 8,
        color: "#A2D1CF",
        highlight: "#ABD6D4",
        label: "Transport"
    }, {
        value: 7,
        color: "#C8B631",
        highlight: "#CEBD46",
        label: "Food and Beverage"
    }, {
        value: 7,
        color: "#6DBCEB",
        highlight: "#7CC3ED",
        label: "Entertainment"
    }, {
        value: 6,
        color: "#52514E",
        highlight: "#636260",
        label: "Restaurant and Hotels"
    }, {
        value: 6,
        color: "#4F81BC",
        highlight: "#618EC3",
        label: "Insurance"
    }
]

var overviewChart = new Chart(ctx).Doughnut(data, options);
