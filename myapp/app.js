const express = require('express')
const app = express()
const port = 3000
const prompt= require('prompt-sync')({sigint: true});
const number= prompt("Enter a number: ");

app.get('/', (req, res) => {
    if(number <0){
        res.send("The number is negative");
    }
    if(number==0 || number==1){
        res.send(1);
    }
    else{
        let fact=1;
        for(let i=2; i<=number; i++){
            fact=fact*i;
        }
        res.send("factorial of the number is:" + fact);
    }


  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})