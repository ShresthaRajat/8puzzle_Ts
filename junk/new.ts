// console.log("1")

// async function myAwesomeFunction() {
//     setTimeout(() => { }, 100, "foo");
//     return "I Promise"
// }

// function normalFunction() {
//     return "Normal thing"
// }

// const result = myAwesomeFunction();

// console.log(normalFunction());
// console.log(result);


// let p = new Promise<any>((resolve, reject) => {
//     let a = 1+1
//     if (a == 2){
//         resolve("success")
//     }
//     else{
//         reject("fail")
//     }

// })

// p.then((message)=>{
//     console.log("then " + message)
// }).catch((message)=> 
// console.log("catch "+message))



// function otherFunc() {
//     console.log("Function log")
// }


// console.log("foo")
// otherFunc()
// console.log("bar")





console.log("foo")

// setTimeout(() => {console.log("We are in timeout")}, 5000)

function loginUser(email: String, callback) {
    console.log("we will fetch the data");
    // setTimeout(callback({ "userEmail": email }), 1000);
    setTimeout(() => {
        console.log("we have the data");
        callback({ "userEmail": email + " 1"})
    }, 2000);
    setTimeout(() => {
        console.log("we have the data");
        callback({ "userEmail": email + " 2" })
    }, 4000);
}

const user = loginUser("rajat@gmail.com", user => { console.log(user) });

console.log("bar")
