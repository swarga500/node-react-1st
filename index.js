const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json())

const port =  5000;

// const handler = (req,res) =>{
//     res.send('Hello from node')
// }

app.get('/',(req,res) =>{
    res.send('Hello i am  shorgo')
});

const users = [
    {id:0, name: 'aana', email: 'ains@gmail.com', phone: '0178888888'},
    {id:1, name: 'ahana', email: 'dfd@gmail.com', phone: '0178888888'},
    {id:2, name: 'aihi', email: 'dfd@gmail.com', phone: '0178888888'},
    {id:3, name: 'mubaser', email: 'dfd@gmail.com', phone: '0178888888'},
    {id:4, name: 'fred', email: 'fred@gmail.com', phone: '0178888888'},
    {id:5, name: 'toreser', email: 'oreser@gmail.com', phone: '0178888888'},
    {id:6, name: 'gorge', email: 'dfd@gmail.com', phone: '0178888888'},
    {id:7, name: 'minaa', email: 'minaa@gmail.com', phone: '0178888888'},
    {id:8, name: 'rabia', email: 'rabia@gmail.com', phone: '0178888888'},
    {id:9, name: 'tasmia', email: 'tasmia@gmail.com', phone: '0178888888'},
]

app.get('/users', (req,res) =>{
    const search = req.query.search;
    // use query parameter
    if(search){
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult)  
    }
    else{
        res.send(users)
    }
    res.send(users)
});
// app method
app.post('/users', (req,res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hit the pso', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

// dynamic api 
app.get('/users/:id', (req,res) =>{
    const id = req.params.id;
    const user = users[id]
    res.send(user)
})
app.get('/fruits', (req,res)=>{
    res.send(['mango', 'am', 'lengra'])
})

app.get('/fruits/magoes/fajli', (req,res)=>{
    res.send('yammy yammy tok falids')
})

app.listen(port, ()=>{
    console.log('listening to port', port)
});