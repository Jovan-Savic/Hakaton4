const express = require("express");
const application = express();

const port = 1000;

application.listen(port, () => {

    console.log('upaljeno');

});

application.use(express.json());

const a = 1;

application.get("/", (request, response) => {

    response.json({

        poruka: "ovo je stiglo od jsona",
        vrednost: a,

    });

});