// console.log(1);
// console.log(2);
// setTimeout(()=>{
//     console.log('Call back funtion fired');
// },2000);
// console.log(3);
// console.log(4);
//using xmlhttp request
// const getTodos=(resource)=>{
//     return new Promise((resolve,reject)=>{
//         const request=new XMLHttpRequest();
//         request.addEventListener('readystatechange',()=>{
//        //console.log(request,request.readyState);
//        if(request.readyState===4 && request.status===200){
//         const data=JSON.parse(request.responseText);//convers json string into js objects
//         resolve(data);
//         //callback(undefined);
//          //console.log(request.responseText);
//        }else if(request.readyState===4){
//         reject('error getting resource');
//         //callback('could not fetch data',undefined);
//         //console.log('could not fetch the data');
//        }
//     });
//     request.open('GET',resource);
//     request.send();
//     });
// };
// getTodos('todos/luigi.json').then((data)=>{
//     console.log('promise1 resolved: ',data);
//     //chaining promise
//     return getTodos('todos/mario.json');
//     // getTodos('todos/mario.json').then((data)=>{
//     //     console.log('promise resolved: ',data);
//     // });
// }).then((data)=>{
//   console.log('promise2 resolved: ',data);
//   return getTodos('todos/shaun.json');
// }).then((data)=>{
//     console.log('promise3 resolved: ',data);
// }).catch((err)=>{
//     console.log('promise rejected: ',err)
// })
// console.log(1);
// console.log(2);
// getTodos('todos/luigi.json',(err,data)=>{
//    //console.log('callback fired');
//    console.log(data);
//    getTodos('todos/mario.json',(err,data)=>{
//     console.log(data);
//     getTodos('todos/shaun.json',(err,data)=>{
//         console.log(data);
//     });
//     });
// });
//    if(err){
//     console.log(err);
//    }
//    console.log(data);
// console.log(3);
// console.log(4);
// //promises example
// const getSomething=()=>{
//     return new Promise((resolve,reject)=>{
//         //fetch something
//        // resolve('some data');
//         reject('some error');
//     });
// //promise -doing something at some point,will resolve if it is success
// //will reject if there is some error
// };
// getSomething().then((data)=>{
//     console.log(data);
// },(err)=>{
//     console.log(err)
// });
//another way to write
// getSomething().then((data)=>{
//  console.log(data);
// }).catch(err=>{
//     console.log(err);
// })
//here promise get rejected,when there was an network error in using fetch requets
// fetch('todos/luigi.json').then((response)=>{
//     console.log('resolved',response);
//     return response.json();
// }).then((data)=>{
//     console.log(data);
//     // fetch('todos/mario.json').then((response)=>{
//     //     console.log('resolved',response);
//     //     return response.json();
//     // }).then((data)=>{
//     //     console.log(data);
//     // })
// }).catch((err)=>{
//     console.log('rejected',err);
// });
//using async and await
//this is asynchronousfuntion whenever we call that fun,returns promise
const getTodos= async()=>{
    //instead of using then we can use await here
    //console.log(response);
    const response= await fetch('todos/luigi.json');
    if(response.status!==200){
       throw new Error('cannot fetch the data');
    }
    const data=await response.json();
    //console.log(data);
    return data;
    // const response1= await fetch('todos/mario.json');
    // const data1=await response1.json();
    // console.log(data1);
};
console.log(1);
console.log(2);
getTodos()
   .then((data) => console.log('resolved:', data))
   .catch(err => console.log('rejected: ',err.message));
// const test=getTodos();
// console.log(test);
console.log(3);
console.log(4);
//means this will take sometime to fecth and display so 
//other js statements will executes and then it resolves