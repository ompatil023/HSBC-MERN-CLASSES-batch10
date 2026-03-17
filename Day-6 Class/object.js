// //literal way 
//  let obj={
//     name:"sai",
//     salary:50000 ,
//     role:"developer" ,
// }
// // console.log(obj);
// // console.log(obj.name);
// // console.log(obj.salary);
// obj.address={city:"bangalore", zipcode:561207}
// obj.skills=["JS" ,"Node JS","Express JS" ,"Neo4j"]
// obj.role="SAP Developer"


// delete obj.name;
// delete obj.salary;

// console.log(obj.skills[1]);
// console.log(obj);

//new keyword

// let obj1=new Object({
//     stdName:"raju",
//     stdRollNo:"Hu2025",
//     course:"MERN Stack"
// })


// console.log(obj1);

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));


let empDetails={
    name:"ravi",
    salary:90000,
}

Object.seal(empDetails)
console.log(Object.isSealed(empDetails));
empDetails.name="vivek"
delete empDetails.name;
empDetails.role="frontend developer"
console.log(empDetails);



