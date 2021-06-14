const mongoose=require('mongoose');
const taskSchema = new mongoose.Schema({
    name:{ 
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    date:{
        type:String,
        require:true
    }
});

const task =mongoose.model('Task',taskSchema);
module.exports=task;
