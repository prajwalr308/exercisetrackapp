const express = require('express');
const cors = require('cors');
const mongoose= require('mongoose');

require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;
const uri="mongodb+srv://admin:dev123@cluster0.tedlr.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority";
app.use(cors());
app.use (express.json());

mongoose.connect(uri,{ useNewUrlParser:true,useCreateIndex:true, useUnifiedTopology: true  });

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log('mongodb connection is eastablished');
});
const exerciseRouter= require('./routes/exercises');
const userRouter = require('./routes/users');

app.use('/exercises',exerciseRouter);
app.use('/users',userRouter);
if(process.env.NODE_ENV==='production'){
    app.use(express.static('../client/build/'));
    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname+'../client/build/index.html'));
    });
}

app.listen(port,()=>{
    console.log(`server is running at port ${port} `);
})