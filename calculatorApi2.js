const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const port = 3000;

app.get('/', (req,res) => {
    res.send(`The correct endpoints to use are /operator/:num1/:num2, for example http://localhost:(port#)/add/2/2/`);
})

app.get('/add/:num1/:num2', (req, res) => {
    let num1 = parseInt(req.params.num1);
    let num2 = parseInt(req.params.num2);
    if(isNaN(num1) || isNaN(num2)){
        res.send("Numbers only!");
    } else {
        res.json({num1: num1, num2: num2, result: num1 + num2})
    }
})

app.get('/sub/:num1/:num2', (req, res) => {
    let num1 = parseInt(req.params.num1);
    let num2 = parseInt(req.params.num2);
    if(isNaN(num1) || isNaN(num2)){
        res.send("Numbers only!");
    } else {
        res.json({num1: num1, num2: num2, result: num1 - num2})
    }
})

app.get('/mul/:num1/:num2', (req, res) => {
    let num1 = parseInt(req.params.num1);
    let num2 = parseInt(req.params.num2);
    if(isNaN(num1) || isNaN(num2)){
        res.send("Numbers only!");
    } else {
        res.json({num1: num1, num2: num2, result: num1 * num2})
    }
})

app.get('/div/:num1/:num2', (req, res) => {
    let num1 = parseInt(req.params.num1);
    let num2 = parseInt(req.params.num2);
    if(isNaN(num1) || isNaN(num2)){
        res.send("Numbers only!");
    } else {
        res.json({num1: num1, num2: num2, result: num1 / num2})
    }
})


app.get('/:operator/:num1/:num2', (req, res) => {
    let num1 = parseInt(req.params.num1);
    let num2 = parseInt(req.params.num2);
    let operator = req.params.operator;
    if(isNaN(num1) || isNaN(num2)){
        res.send("Numbers only!");
    } else if(operator === "+"){
        res.json({num1: num1, num2: num2, result: num1 + num2})
    } else if (operator === "-"){
        res.json({num1: num1, num2: num2, result: num1 - num2})
    }else if (operator === "*"){
        res.json({num1: num1, num2: num2, result: num1 * num2})
    }else if (operator === "/"){
        res.json({num1: num1, num2: num2, result: num1 / num2})
    } else {
        res.send("the operator is not supported")
    }
})

app.listen(port, () => {
    console.log("Server runnning on port ", port);
})