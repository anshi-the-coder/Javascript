import {add,sub,mul,div,obj,list,name} from './utils/calculate.js'

let main=(func,a,b)=>{
  return func(a,b)
}

let a=main(sub,4,7)
console.log(a)
a=main(add,4,7)
console.log(a)
a=main(mul,4,7)
console.log(a)
a=main(div,4,7)
console.log(a)
console.log(obj)
console.log(list)
console.log(name)