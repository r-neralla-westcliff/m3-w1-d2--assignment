require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('open', ()=> {
    console.log('Mongoose connection open')
}).on('error', (error)=>{
    console.log(`Connection error: ${error.message}`)
})

require('./models/Registration')
const app = require('./app');

const server = app.listen(3000, function(){
    console.log(`Express is running on port 3000`);
});