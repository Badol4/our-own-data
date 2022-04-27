const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
var cors = require('cors')

app.use(express.json)

app.use(cors())


app.get("/", (req, res) => {
    console.log(req);
  res.send("Hello freom js");
});

app.post('/user', (req,res)=> {
    console.log('request',req.body);
    res.send('post method success')
})

const user =[
    {id:1, name:'badol',email:'badol@gmail.com'},
    {id:1, name:'badol',email:'badol@gmail.com'},
    {id:3, name:'badol',email:'badol@gmail.com'},
    {id:4, name:'badol',email:'badol@gmail.com'},
    {id:5, name:'badol',email:'badol@gmail.com'},
    {id:6, name:'badol',email:'badol@gmail.com'},
    {id:7, name:'badol',email:'badol@gmail.com'},
    {id:2, name:'badol',email:'badol@gmail.com'},
    {id:2, name:'badol',email:'badol@gmail.com'},
    {id:2, name:'badol',email:'badol@gmail.com'},
    {id:2, name:'fdaa',email:'badol@gmail.com'},
    {id:2, name:'bdffadol',email:'badol@gmail.com'},
    {id:2, name:'badol',email:'badol@gmail.com'},
    {id:2, name:'badol',email:'badol@gmail.com'},
    {id:2, name:'badol',email:'badol@gmail.com'},
    {id:2, name:'dddd',email:'badol@gmail.com'},
    {id:2, name:'badol',email:'badol@gmail.com'},
    {id:2, name:'badol',email:'badol@gmail.com'},
    {id:2, name:'adskjfl',email:'badol@gmail.com'},
    {id:2, name:'badol',email:'badol@gmail.com'},
    {id:2, name:'badol',email:'badol@gmail.com'},
    {id:2, name:'badol',email:'badol@gmail.com'},
    {id:2, name:'badol',email:'badol@gmail.com'},
    {id:2, name:'badol',email:'badol@gmail.com'}
]
app.get('/user', (req, res) => {
    res.send(user)
})

app.listen(port, () => {
  console.log('Example app listening on port', port);
});
