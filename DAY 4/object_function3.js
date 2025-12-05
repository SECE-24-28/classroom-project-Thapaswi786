let student=[
    {sna:"Vijay",mark:95,fee:true},
    {sna:"Ajith",mark:85,fee:false},
    {sna:"Surya",mark:75,fee:true}
]
//ForEach
console.log("ForEach")
student.forEach((stu)=>
    {
    console.log(stu.sna+" "+stu.mark)
  })

  //Map
  console.log("Map")
  let newstu1 = student.map((stu)=>{
    return {na:stu.sna,ma:stu.mark+5}
})
console.log(newstu1)

//Every
console.log("Every")
let newstu2=student.every((stu)=>
{
    return stu.mark>=35
})
console.log(newstu2)

//Some
console.log("Some")
let newstu3=student.some((stu)=>
{
    return stu.fee=false
})
console.log(newstu3)

//Filter
console.log("Filter")
let newstu4=student.filter((stu)=>
{
    return stu.mark>=35
})
console.log(newstu4)

