var days = new Array();
var msgs = new Array();


var months = new Array("",
    "ജനുവരി", "ഫെബ്രുവരി", "മാർച്ച്", "ഏപ്രിൽ", "മെയ്", "ജൂൺ",
    "ജൂലൈ", "ആഗസ്റ്റ്", "സെപ്റ്റംബർ", "ഒക്ടോബർ", "നവംബർ", "ഡിസംബർ"
);

var today = new Date();
var mon = months[today.getMonth() + 1];
var day = today.getDate();
var year = today.getFullYear();

function dateMsg() {
    for (i = 0; i < days.length; i++) {
        tempdate = new Date(days[i]);
        tempmonth = months[tempdate.getMonth() + 1];
        tempday = tempdate.getDate();
        tempyear = tempdate.getYear();
        if (year == tempyear && mon == tempmonth && day == tempday)
            return (msgs[i]);
    }
    return (day + " " + mon + " " + year);
}

document.write('<b style="color:#1A237E;font-family:ib;font-size:5vw;">' + dateMsg() + '</b>'); 
