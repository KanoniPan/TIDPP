let a = process.argv[2]
let b = process.argv[3]
let c = process.argv[4]
let x1,x2;
let d = b*b-4*a*c
console.log(d)
if (d>0){
    x1 = (-b - Math.sqrt(d))/2
    x2 = (-b + Math.sqrt(d))/2
    console.log(`x1 = ${x1}\nx2 = ${x2}\nd = ${d}`)
} else if(d === 0) {
    x1 = (-b/2*a);
    console.log(`x1 = ${x1}\nd = ${d}`)
} else {
    console.log('d<0')
}
console.log(d) 