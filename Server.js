const { request, response } = require("express");
const express = require("express");
const application = express();
const Connect = require("./Database/Baza");
const User = require("./Database/Users");
const port = 1000;

application.listen(port, () => {

    console.log('upaljeno');

});

Connect();

application.use(express.json());

application.use(express.static("Frontend"));

var flag = 0;

application.post("/User/Log", async (request, response) => {

    try{
        console.log("req pogodjen");

        const AllUsers = await User.find();
        /*const usern = "Hakaton2021";
        const pass = "HZS4";
        const newUser = new User({
            Username: usern,
            Password: pass,
        });

        const provera = await newUser.save();*/

        /*console.log(AllUsers);*/
        AllUsers.forEach(use => {
            
            var f = 0;

            if (request.body.user == use.Username) {
                if (request.body.password == use.Password) {
                    f = 1;
                }
            }

            if (f == 1) flag = 1;

        });

        //console.log(provera);
        
        response.json({
            uspesno: flag,
        });
    } catch(err) {
        response.status(404).json({
        poruka: err.message,
        });
    }
});

application.get("/Provera/Login", async (request, response) => {

    try {
        console.log("trazi se flag");
        response.json({
            uspesno: flag,
        });

    } catch(err) {
        response.status(404).json({
        poruka: err.message,
        });
    }

});