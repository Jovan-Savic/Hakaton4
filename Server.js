const express = require("express");
const application = express();
const Connect = require("./Database/Baza");
const port = 1000;

application.listen(port, () => {

    console.log('upaljeno');

});

Connect();

application.use(express.json());

const flag = false;

application.post("/User/Log", (request, response) => {

    try{
        console.log("req pogodjen"),
        console.log(request.body)
    } catch(err) {
        response.status(404).json({
        poruka: err.message,
        });
    }
});