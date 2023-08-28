//search//
function myFunction() { var input, filter, ul, li, a, i; input = document.getElementById("mySearch"); filter = input.value.toUpperCase(); ul = document.getElementById("myMenu"); li = ul.getElementsByTagName("li"); for (i = 0; i < li.length; i++) { a = li[i].getElementsByTagName("a")[0]; if (a.innerHTML.toUpperCase().indexOf(filter) > -1) { li[i].style.display = ""; } else { li[i].style.display = "none"; } } } 




//wishes//
 var myDate = new Date();
    var hrs = myDate.getHours();

    var greet;

    if (hrs < 12)
        greet = 'Good Morning';
    else if (hrs >= 12 && hrs <= 16)
        greet = 'Good Afternoon';
    else if (hrs >= 16 && hrs <= 21)
        greet = 'Good Evening';
    else if (hrs >= 21 && hrs <= 24)
        greet = 'Good Night';

    document.getElementById('wishes').innerHTML =
    '<b>'+ 'Hi ' +   greet +   ' & Happy Onam </b>   '
    ;

//last modified//
var date = document.lastModified;
      var lastModifiedDate = new Date(date);
  


document.getElementById("result").innerHTML = "Last Modified On : " + lastModifiedDate;


