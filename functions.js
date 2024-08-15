function hoi(a,b) {
   console.log("the sum is "+(a+b));
    
}
hoi(3,4);
function nice(name) {
    console.log("hey "  + name + " is good coder");
    console.log("hey " + name + " is nice coder");
    console.log("hey " + name + " is ultimate");
}
nice("Vishwas");
function randomFraction() {
    return Math.floor(Math.random()*10);
}
console.log(randomFraction());
function convertToInteger(str){
   return parseInt(str,2) ;
}
convertToInteger("123")