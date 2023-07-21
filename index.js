console.log("B1")
function chialaydu (a,b){
    var c=a%2 & b%2
    console.log(c)
}
chialaydu(11,9)

console.log("B2")
var fruits = ["Banana", "Mango", "Cherry","Kiwi","Orange"]
function cuoi(array){
    return array[array.length-1]
}
var kq = cuoi(fruits)
console.log(kq)
function dau(array){
    return array[0]
}
var kq = dau(fruits)
console.log(kq)

console.log("B3")
var sum=[1,2,3,4,5,6]
for (var a=0; a<sum.length; a++){
        console.log(sum[a])
}

console.log("B4")
var a=8
var b=6
var c=a-b
if (c>=2){
    console.log(c)
}
else{
    console.log("Yeu cau nhap lai so a va b")
}