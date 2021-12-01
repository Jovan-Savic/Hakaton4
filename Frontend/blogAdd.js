function addBlog(event) {
    event.preventDefault();

    var ime = document.getElementById("imeJela").value;
    var slika = document.getElementById("slikaURL").value;
    var priprema = document.getElementById("pr").value;



    const xhttp = new XMLHttpRequest;
        xhttp.onload = function() {
            //refresh
            location.reload();
        }
    
    var obj = {
        "text": priprema,
        "name": ime,
        "picture": slika
    }

    var json = JSON.stringify(obj);


    xhttp.open("POST", "/Blogs/Post");
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(json);
}