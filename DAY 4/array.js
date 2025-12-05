arr = ["Arun","Vijay","Guru","Ravi"]
console.log("Original String")
console.log(arr)

console.log("push")
arr.push("Sachin")

console.log("pop")
arr.pop()
console.log(arr)

console.log("shift")
arr.shift()
console.log(arr)

console.log("unshift")
arr.unshift("Jagadesh")
console.log(arr)

console.log("length")
console.length = arr.length
console.log(console.length)

console.log("concat")
console.log(arr.concat(["Viswa","Villu"]))


console.log("delete")
delete arr[2]
console.log(arr)

console.log("Splice")
arr.splice(0,1)
console.log(arr)

console.log("Slice")
console.log(arr.slice(0,2))