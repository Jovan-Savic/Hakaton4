function login(event){
    event.preventDefault();
    var user = document.getElementsByClassName("input")[0].value;
    var password = document.getElementsByClassName("input")[1].value;

    var div = document.getElementById("box");
    var prazni = document.getElementById("prazni");
    var pogresni = document.getElementById("pogresni");
    if (user.length<=0 || password.length<=0) {
        //prikazi da nisu uneti podaci
        pogresni.style.display = "none";
        div.style.display = "block";
        prazni.style.display = "block";
    } else {
        //ajax posalje username i password
        const xhttp = new XMLHttpRequest;
        xhttp.onload = function() {
            //nakon sto se dobije odgovor od servera
            var jsonResponse = xhttp.response;
            var objResponse = JSON.parse(jsonResponse);
            

            console.log(jsonResponse);
            console.log(objResponse.uspesno);
            var logovan = objResponse.uspesno;

            if (logovan == 0) {
                prazni.style.display = "none";
                div.style.display = "block";
                pogresni.style.display = "block"; 
            } else if (logovan == 1) {
                window.location.replace("./index.html");
            }


        }
        xhttp.open("POST", "/User/Log");
        xhttp.setRequestHeader("Content-type", "application/json");

        var obj = {
            "user":user,
            "password": password
        }

        var json = JSON.stringify(obj);

        xhttp.send(json);
    }
}