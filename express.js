const express = require('express');
const app  = express();
const port = 3000;

// default routing
app.get('/', (req, res)=>{
    res.send('Hello World!')
})

// routing '/dog'
// app.get('/dog', (req, res)=>{
//     res.send(`<h1>Dog<h2>`)
// })

// routing '/cat'
app.get('/cat', (req, res)=>{
    res.send('Cat')
})

// click 'Go youtube' --> link to youtube.com
app.get('/you', (req, res)=>{
    res.send("<a href = 'https://www.youtube.com/'>Go Youtube<a>")
})

// type of json
app.get('/dog', (req, res)=>{
    res.json({'sound': '멍멍'})
})
// 명시적으로 json이라고 표현 --> 응답시간 감소
// send로 보내도 댐



app.listen(port, ()=> {
    console.log(`Example app listening on port${port}`)
})