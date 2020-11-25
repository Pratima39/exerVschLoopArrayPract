var officeItems= ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
var i = 2 ;
var len = officeItems.length;
var text = " computer";

for (; i < len; i++) {
  text += officeItems[i] + "<br>";
}
console.log(officeItems)
console.log(officeItems[2])
var name="computer";

   // for (vari= computer; i < len; i++ ){
     // if v[i] === 1 
        name ++;

console.log (name);

    var people = [  
      {
        name: "Mike",
        age: 12,
        gender: "male"
      },{
        name: "Madeline",
        age: 80,
        gender: "female"
      },{
        name: "Cheryl",
        age: 22,
        gender: "female"
      },{
        name: "Sam",
        age: 30,
        gender: "male"
      },{
        name: "Suzy",
        age: 4,
        gender: "female"
      }
    ] 
    //Iterate your objects, check their age property to see if greater than equal to 18
for(let x = 0; x < people.length; x++) {
  if(people[x].age >= 18){
     console.log(people[x].name + " Is Old Enough");
  }else {
     console.log(people[x].name + " Is Not Old Enough");
  } 
}
