const express=require('express');
const port=8000;
const app=express();




//assets
app.use(express.static('./assets'));


//set up the view engine
app.set('view engine','ejs');
app.set('views','./views');


//require the routes
app.use('/',require('./routes'));




app.listen(port,function(err){

    if(err)
    {
        console.log(err);
        return;
    }
    console.log('server is up and running on port:',port);
});