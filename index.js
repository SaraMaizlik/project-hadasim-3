const PORT = 3042

const express=require('express')//יבוא של המודול
const app=express() // מימוש של השרת

const bodyParser = require("body-parser") //יבוא ספריה להמרה לגיסון את מה שמגיע מהקליינט
app.use(bodyParser.json()) // מימוש הספריה

const mongoose = require('mongoose')//התקנת ספריה להתחברות למונגו

const env = require('dotenv')//env להשתמש במשתני מערכת בקובץ
env.config()// מימוש המשתנים

mongoose.connect(process.env.MONGO_CONNECTION).then(() => {
    console.log('connect to mongo');
 
}).catch(err => { "myErr" + err })


//routes
// (שכתבנו בעצמינו) ייבוא של הספריה של המודל
const memberRouter = require('./Routes/userRouter')


//use
// הפעלה של המודול
app.use('/member', memberRouter) 


app.listen(PORT,()=>{
    console.log(`listening ${PORT}`);
})