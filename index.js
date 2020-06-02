const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || '3000';

app.set('view engine','ejs')
app.use('/public', express.static(path.join(__dirname, 'assets')))

app.get('/',(req,res,next)=>{
    res.render('index');
})


app.listen(port, ()=>console.info(`Running on port ${port}`));