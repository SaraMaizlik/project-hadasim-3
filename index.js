const PORT = 3042
 
const express=require('express')//יבוא של המודול
const app=express() // מימוש של השרת

const cors = require('cors'); // מודול שמאפשר להתחבר לקוח ושרת
app.use(cors()) // הפעלה

const bodyParser = require("body-parser") //יבוא ספריה להמרה לגיסון את מה שמגיע מהקליינט
app.use(bodyParser.json()) // מימוש הספריה

const mongoose = require('mongoose')//התקנת ספריה להתחברות למונגו

const env = require('dotenv')//env להשתמש במשתני מערכת בקובץ
env.config()// מימוש המשתנים
 
mongoose.connect(process.env.MONGO_CONNECTION).then(() => {
    console.log('connect to mongo');
 
}).catch(err => { console.log("myErr" + err )})

//routes
// (שכתבנו בעצמינו) ייבוא של הספריה של המודל
const memberRouter = require('./Routes/memberRoute')
const addressRouter = require('./Routes/addressRoute')
const vaccineRouter = require('./Routes/vaccineRoute')


//use
// הפעלה של המודול
app.use('/member', memberRouter)
app.use('/address', addressRouter)
app.use('/vaccine', vaccineRouter)


app.listen(PORT,()=>{
    console.log(`listening ${PORT}`);
})