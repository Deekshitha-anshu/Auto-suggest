const express=require('express')    

const app=express()
const PORT =process.env.PORT || 3002;

//web server :
app.use(express.static("frontend")) //to serve static files from public folder

app.listen(PORT,function(){
    console.log("successfully running at http://localhost:"+PORT);
})
//
