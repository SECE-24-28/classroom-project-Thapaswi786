let employee=[{ena:"Arun",mob:1211},
            {ena:"Anu",mob:1211},
            {ena:"Ajay",mob:1211},
            {ena:"Aravind",mob:1211},
            {ena:"Varun",mob:1211},
            {ena:"Yugan",mob:1211}
        ]
let newEmp=employee.filter((emp)=>
{
    return emp.ena.includes("A")
})
console.log(newEmp)