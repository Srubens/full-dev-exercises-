/**
 * Assíncronismo
 */

setTimeout(()=>{
    console.log('ola mundo')
},1500)
console.log('Este valor vai vim primeiro')

// setInterval(()=>{
//     console.log('checagem a cada segundo.')
// },1000)

let count = 0 
let interval = setInterval(() =>{
    console.log('ola, do setinterval')
    count++ 
    if( count > 5 ){
        clearInterval(interval)
    }
},1000)

let interval1 = setInterval(() =>{
    console.log('ola, do setinterval 1')
    count++ 
    if( count > 10 ){
        clearInterval(interval1)
    }
},1000)