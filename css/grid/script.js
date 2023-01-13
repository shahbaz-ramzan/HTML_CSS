let rollnumber=784;
const name = "james";
let physics=70;
let chemistry=70;
let computerapplication=50;
let totalmarks=physics+chemistry+computerapplication;
let percentage=totalmarks/300*100;
if(percentage>=80){
    console.log("divison=first")
}
else if(percentage>=60){
    console.log("division=second");
}else if(percentage>=50){
    console.log("divison=third");
}
else{
    console.log("fail")
}
console.log(`totalmarks=${totalmarks}`)
console.log(`percentage=${percentage}`)