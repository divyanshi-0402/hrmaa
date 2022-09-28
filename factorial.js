const prompt= require('prompt-sync')({sigint: true});

const number= parseInt(prompt("Enter a number: "));

if(number <0){
    console.log("The number is negative");
}
if(number==0 || number==1){
    console.log(1);
}
else{
    let fact=1;
    for(let i=2; i<=number; i++){
        fact=fact*i;
    }
    console.log("factorial of the number is:" + fact);
}