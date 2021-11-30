const mongoose = require("mongoose");

async function Connect() {

    try {
        const link = "mongodb+srv://Hakerovi_drugari:Hakerovi_drugari@cluster0.6icaf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


        const connection = await mongoose.connect(link, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(2);
    }
    catch(err) {

        console.log(err.message)

    }

}

module.exports = Connect;