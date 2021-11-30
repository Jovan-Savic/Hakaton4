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
    }
}