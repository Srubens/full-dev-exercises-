const { readFile, writeFile } = require('./fs-promise')

//CALLBACK HELL
// fs.readFile('temporizadores.js', (err, data) =>{
//   fs.writeFile('copy-temporizadores.js', data, (err) =>{
//       console.log('Arquivo copiado')
//   })  
// })

/** PROMISES  + ASYNC / AWAIT */
// const readFile = path => new Promise((resolve, reject) =>{
//     fs.readFile(path, (err, data) =>{
//         if(err){
//             reject(err)
//         }else{
//             resolve(data)
//         }
//     })
// })

// const writeFile = (path, data) => new Promise ((resolve, reject) =>{
//     fs.writeFile(path, data, (err) =>{
//         if(err){
//             reject(err)
//         }else{
//             resolve(data)
//         }
//     })
// })
/**
readFile('temporizadores.js')
    .then(data =>{
        writeFile('copia-promise.js', data)
        console.log( writeFile('copia-promise.js', data) )
    })
    .then(() => console.log('Arquivo copiado') )
    .catch((err) =>{
        console.log(err)
    })
*/

const copyFile = async() =>{
    console.log('ola async await')
    try{
        const data = await readFile('temporizadores.js')
        // console.log(String(data))
        await writeFile('copy-async-await.js', data)
        console.log(`Arquivo lido e escrito`)
    }catch(err){
        console.log(`${err} err`)
    }
}

copyFile().then( () => console.log('fim do async/await') )
