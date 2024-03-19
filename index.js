
import express from "express";
import axios from "axios";
import ejs from "ejs";

const app = express();
app.use(express.static("public"));
const url = "https://secrets-api.appbrewery.com";

const port = 3000;

app.get("/", async (req,res) => {
    try {
        const result = await axios.get(url + "/random");
        res.render("index.ejs", {
            user : result.data.username,
            secret: result.data.secret
        });
    } catch (error) {
        res.status(400).send(error.message);
    }   
});

app.listen(port, ()=> {
    console.log(`Server running from port: ${port}`);
});
