// FOR LOOP------------------------------------------

// EXAMPLE 1
let  sum=0;
for(let i=1;i<=5;i++){
    sum=sum+i;
}
console.log("The sum is:",sum);
console.log("loop has ended")

// EXAMPLE 2
for(let y=1;y<=5;y++){
    console.log("y=",y);
}
// console.log(y) // if we use this, This line will show error as it is a block scoped and it will not work outside the loop 


// WHILE LOOP-----------------------------------------
let x=1;
while(x<=10){
    console.log("Hello, World!");
    x++
}

//DO WHILE LOOP---------------------------------------
let z=20;
do{
    console.log("Hello, everyone!")
}while(z<=10); //This will print the string only one time as we using do while which will execute the code at least once.

//FOR-OF LOOP
let str="FOROFLOOP";
let size="0"
for(let val of str){  //iterators -> Characters
    console.log("value:",val)
    size++;
}
console.log("String size=",size);

//FOR-IN LOOP(Returns key values)
let student={
    name:"Rahul",
    age:18,
    cgpa:8.7,
    isPass:true,
};
for(let dtl in student){
    console.log("key:",dtl,",value:",student[dtl]);
}

//--------------------------------------------------------------------------------------
//Q1--> Print all even numbers from 1 to 100
for(let num=1;num<=100;num++){
    if(num%2==0){
        console.log(num)
    }
}

//Q2-->User guesses the numbers until the number maatches the Game number
let GameNum=25;
let UserNum= prompt("Guess the game number:");

while(UserNum != GameNum){
    UserNum=prompt("Wrong Number!, Guess the game number again:");
}
console.log("Congrats,You guessed the right number");