//Hai I'm with name
let student={na:"meena",age:22,marks:80,demo:function(){
    console.log("Hai I'm "+this.na) }
}
    student.demo();
    let stu={na:"meera",age:20,marks:90,samp:()=>{
    console.log("Hai I'm "+this.na) }
}
    stu.samp();