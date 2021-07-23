const express=require('express');
const path=require('path');
const mongoose=require('mongoose');
const db=require("./config/mongoose");
const Task = require('./models/task');

const app=express();//to add all the functionality of express
const port=7000;//server will run om port number 7000


// use express router
//app.use('/',require('./routes'));//app using this route
// set up the view engines

app.set('view engine','ejs');//to set ejs
app.set('views','./views');//where the property is going to set
app.use(express.static("assets"));
app.use(express.urlencoded());

// rendering home page when the request is coming 
app.get('/',function(req,res){
    Task.find({},function(err,task){
        if(err){
            console.log("error in finding the task");
            return;
        }
        return res.render('home',{
            task_list:task
        });

    });
});
// creating task
app.post('/create-task',function(req,res){
    Task.create({
        name:req.body.name,
        category:req.body.category,
        date:req.body.date,
    },function(err,newTask){
        if(err){
            console.log("error in creating task");
            return;
        }
        console.log('*********',newTask);
        return res.redirect('back');
    });
});
// deleting task
app.get('/delete-task',function(req,res){
   let id= req.query;
   console.log(id);
    var count=Object.keys(id).length;
    for(let i=0;i<count;i++)
    {
        Task.findByIdAndDelete(Object.keys(id)[i],function(err){
                if(err)
                {
                console.log('error in deleting task');
                return;
                }
            });
    } 
    return res.redirect('back'); 
});



// server is listing the request and sending back response
app.listen(port,function(err){
    if(err){
        console.log('Error',err);
        console.log(`Error in running the server : ${err}`);

    }
    console.log(`server is running on port:${port}`);

});