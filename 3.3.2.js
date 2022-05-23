const person = {
    city: "Moscow",
    univer: "МГУ",
}
const student = Object.create(person);
student.ownCity = "Piter";
student.ownUniver = "СПбГУ";

const str = "city"


function checkPropInObj (str, student) {
 return (str in student);
  
}

console.log(checkPropInObj(str, student))

const str1 = "town"

console.log(checkPropInObj(str1, student))

const str2 = "univer"

console.log(checkPropInObj(str2, student))