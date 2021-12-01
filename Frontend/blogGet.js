function blogGet() {
    const xhttp = new XMLHttpRequest;
    xhttp.onload = function() {
        document.getElementsByClassName("loading")[0].style.display = "none";

        var jsonResponse = xhttp.response;
        var objResponse = JSON.parse(jsonResponse);
        console.log(objResponse);
        

        var text = "";

        for (let x = 0; x < objResponse.list.length; x++) {
            text = text + '<div class="card"><img src=' + objResponse.list[x].Picture
            + ' alt="" class="slika"><div class="tekst"><p class="je">'+ objResponse.list[x].Text
            + '</p></div>'
            + '<div class="info"><div class="lajkovi"><svg  onclick="myfunction(\'prst5\')" id="prst5" class="prst" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-thumb-up" width="30" height="30" viewBox="0 0 24 24" stroke-width="0.5" stroke="#2c3e50" style="fill: black;" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" /></svg> <span> 310</span> </div>'
            + '<div class="pogleda"><font> ' + objResponse.list[x].Name + '</font></div></div></div>';
            
        }
        console.log(text);
        document.getElementsByClassName("kardkont")[0].insertAdjacentHTML('afterbegin', text);
        document.getElementsByClassName("kardkont")[0].style.display = "grid";
    }

    xhttp.open("GET", "/Blogs/Get");
    xhttp.send();

}