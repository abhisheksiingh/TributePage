let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
const age = 18;
if(registeredEarly && age>=18) {
  raceNumber += 1000;
} 

if(registeredEarly && age>=18){
  console.log(`${raceNumber} will race at 9.30 am`)
}
else if (!registeredEarly && age>18) {
  console.log(`Your raceNumber is ${raceNumber}. You will race at 11:00 am`)
}
else if (age < 18){
  console.log(`Your racenumber is ${raceNumber}. You will race at 12.30 pm` )
}
else {
  console.log (`You should see the registration desk`)
}
