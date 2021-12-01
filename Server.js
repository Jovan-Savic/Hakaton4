const { request, response } = require("express");
const express = require("express");
const application = express();
const Connect = require("./Database/Baza");
const User = require("./Database/Users");
const Blog = require("./Database/Blog_posts");
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

application.get("/Blogs/Get", async (request, responce) => {

    try{
        console.log("Vraca blogove");
        const AllBlogs = await Blog.find();

        response.json({
            list: AllBlogs,
        });

    } catch(err) {
        response.status(404).json({
        poruka: err.message,
        });
    }

});

application.post("/Blogs/Post", async (request, responce) => {

    try{
        console.log("Salje blog");

        const newBlog = new Blog({
            Text: request.body.text,
            Name: request.body.name,
            Picture: request.body.picture,
        });

        const provera = await newBlog.save();

        console.log(provera);

    } catch(err) {
        response.status(404).json({
        poruka: err.message,
        });
    }

});