const person = {
    city: "Moscow",
    univer: "МГУ",
}
const student = Object.create(person);
student.ownCity = "Piter";
student.ownUniver = "СПбГУ";

function printCity(student){
  for(let key in student) {
    if(student.hasOwnProperty(key)){
      console.log(key, student[key])
    }
  }
}
printCity(student)