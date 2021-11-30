function login(event){
    event.preventDefault();
    var user = document.getElementsByClassName("input")[0].value;
    var password = document.getElementsByClassName("input")[1].value;

    if (user.length<=0) {
        //prikazi username nije validan
    } else if(password.length<=0) {
        //prikazi password nije validan
    } else {
        //ajax posalje username i password
    }
}