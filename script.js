/* Toggle between adding and removing the "responsive" class to topnav 
when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

function tooltipFunction() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Tag Copied";
    navigator.clipboard.writeText
        ("Hehe#1279");
}


function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "";
}