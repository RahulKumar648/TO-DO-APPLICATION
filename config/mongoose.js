const mongoose=require('mongoose');
// mongoose.connect('mongodb://localhost/task_list_db');

console.log("start");

mongoose.connect(
    "mongodb+srv://Rahul_Keshri:Rahul%401511@cluster0.ni5pc.mongodb.net/TO-DO?retryWrites=true&w=majority",
    {useNewUrlParser:true,useUnifiedTopology:true},
    (err)=>{
        if(err){console.log(err);}
    console.log("connected to mongoDB");
})
// const db =mongoose.connection;


// db.on('error',console.error.bind(console,'error connecting to db'));
// // up and running then print the message
// db.once('open',function(){
//     console.log('successfully connected to database');
// });