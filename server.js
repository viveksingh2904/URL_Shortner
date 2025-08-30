import express from 'express'
import mongoose from 'mongoose'
import { shortUrl, getOriginalUrl } from './Controllers/url.js';

const app = express();

app.use(express.urlencoded({extended:true}))

mongoose.connect("mongodb+srv://vivekmani2904:bFWC1R4Etj2598nh@cluster0.diyrsmn.mongodb.net/",{
    dbName:"Nodejs_Mastery_Course",
}
).then(()=>console.log("MongoDb connected..!"))
.catch((err)=>console.log(err));

//style.css ka use kar rahe hai yaha hum jo ki public me hai
app.use(express.static("public"));

//rendering the ejs file
app.get('/',(req,res)=>{
    res.render("index.ejs",{shortUrl:null})
})

//shorting url logic
app.post('/short',shortUrl)

//redirect to original url using short code: dynamic routing
app.get('/:shortCode', getOriginalUrl);

const port = 1000;
app.listen(port,()=>console.log(`server is running on port ${port}`))