
// NOTE: Wyjątki:

// class Animal {
//   constructor(name, age) {
//     this.name = name
//     this.age = age
//   }

//   speak() {
//     console.log(this.name + ' makes a noise.')
//   }
// }

// class Dog extends Animal {
//   constructor(myDogName, myDogAge) {
//     super(myDogName,myDogAge)
//   }
//   myDogSpeak() {
  
//     try {
//       speak()
//       console.log(this.name + ' age: ' + this.age)
//     } catch (ex) {
//       console.log('Error: ' + this.speak())
//       console.log(ex)
//     }
//   }
// }

// let dog = new Dog()

// dog.myDogSpeak()


// let examplePromise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve('foo')
//     }, 300)
// })

// examplePromise.then((value) => {
//     console.log(value)

//     return value
//     // expected output: "foo"
// }).then((newValue) => {

//   console.log(newValue)
//   newValue = 1

//   console.log(newValue)
// })

// console.log(examplePromise)
// expected output: [object Promise]


// NOTE: Obsługa błędów

// let promise2 = new Promise((resolve, reject) => {
//     setTimeout(function () {
//         resolve('foo')
//         reject(console.log("DEHDBRIBIJR"))
//     }, 300)
// })

// promise2.then((value) => {
//     console.log(value)
//     // expected output: "foo"
// }).catch(err => console.log(err))

// console.log(promise1)
  // expected output: [object Promise]