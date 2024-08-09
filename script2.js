let a = 0;
for (let i = 0; i < 10; i++) {
 a = a + i;
console.log(a);
}
let obj = {
    name: "Vishwas",
    role: "Developer",
    company: "Google"

}
for (const key in obj) {

const element =obj[key];
    console.log(key,element);

}
for (const c of "Vishwas") {
    console.log(c);
    
}