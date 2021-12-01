 function provera(){
    const xhttp = new XMLHttpRequest;
    
    xhttp.onload = function() {
        var jsonResponse = xhttp.response;
        var objResponse = JSON.parse(jsonResponse);
        var logovan = objResponse.uspesno;

        if (logovan == 1) {
            var login = document.getElementsByClassName("login")[0];
            login.style.display = "none";
        }
    }

    xhttp.open("GET", "/Provera/Login");
    xhttp.send();
}