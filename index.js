const express=require('express');
const port=8000;

const app=express();






app.listen(port,function(err){

    if(err)
    {
        console.log(err);
        return;
    }
    console.log('server is up and running on port:',port);
})