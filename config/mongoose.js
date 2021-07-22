const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/task_list_db');
const db =mongoose.connection;


// mongoose.connect(
//     `${process.env.MONGO_URL}`,
//     {useNewUrlParser:true,useUnifiedTopology:true},
//     (err)=>{
//         if(err){console.log(err);}
//     console.log("connected to mongoDB");
// })



db.on('error',console.error.bind(console,'error connecting to db'));
// up and running then print the message
db.once('open',function(){
    console.log('successfully connected to database');
});