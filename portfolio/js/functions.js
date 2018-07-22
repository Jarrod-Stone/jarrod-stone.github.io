function changePage(pageToChangeTo){

    //Hides all main page divs
    document.getElementById("landing").style.display="none";
    document.getElementById("about").style.display="none";
    document.getElementById("projects").style.display="none";
    document.getElementById("contact").style.display="none";

    //Displays the requested div
    document.getElementById(pageToChangeTo).style.display="block";
}