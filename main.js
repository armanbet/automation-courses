//   function summary(first, second) {

const { date } = require("joi")
const { addSyntheticLeadingComment } = require("typescript")

//     let sum = first = second
//     return sum
//   }


//   let calculator = {
//     plus : function(a, b) {
//       return a+b
//     },
//     minus : function(a, b) {
//       return a-b
//     },
//     devider : function(a, b) {
//       return a/b
//     },
//     multiply : function(a, b) {
//       return a*b
//     }
// }

// console.log(calculator.multiply(5,6))

// let userAccount = {
//   profile: {
//       firstName : 'Arman',
//       lastName : 'Markosyan',
//       age :27,
//       social : {
//         facebook: 'www.facebook.com',
//         instagram: 'www.instagram.com'
//       }
//   }
// }

// let facebook = userAccount.profile.social.facebook

// console.log(facebook)
// let arr = [1,2,4,'hey',9,10,2,'asdasdasdasdas']

// function printer(info) {
//   for (let i=info.length; i>=0; i--) {
//     console.log(info[i])
//   }
// }

// printer(arr)

let arr = [1,2,4,'hey',9,10,'wqeqweqwe', 6666666,2,'asdasdasdasdas']

function printer(info) {
 
let newarray = arr.map((value,index)=>value)
  let myCondition = 0
// while(myCondition < 1, myCondition--) {
//        console.log(myCondition)
// }

  // while (1<3) {
  //   console.log("while")
  // }
  
  // do {
  //   console.log("Do While")
  // } while (myCondition < 1, myCondition--);
console.log(newarray)

  // for (let i=0; i<info.length; i++) {
  //   console.log(info[i])
  // }
}
 
printer(arr)



