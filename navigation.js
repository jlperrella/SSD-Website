$( document ).ready(function() {
    var navOpen = false;

    $( ".hamburger" ).on( "click", function() {
        if(navOpen){
            document.getElementById("navigation").style.height = "0";
            navOpen = false;
        } else {
            document.getElementById("navigation").style.height = "200px";
            navOpen = true;
        }
      });
});