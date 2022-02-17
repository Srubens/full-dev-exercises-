const fs = require('fs')
const path = require('path')

const readDir = dir => new Promise((resolve, reject) =>{
    fs.readdir(dir, (err, data) =>{
        if(err){
            reject(err)
        }else{
            resolve(data)
        }
    })
})

const isDirectory = async(path) => {
    const stats = await stat(path)
    return stats.isDirectory() ? path : false
}

const stat = path => new Promise((resolve, reject) =>{
    fs.stat(path, (err, stats) =>{
        if(err){
            reject(err)
        }else{
            resolve(stats)
        }
    })
})

const myDir = path.join(__dirname, '../')

// console.log(path)

const execute = async() =>{
    const files = await readDir('./')
    const posibledirectories = await Promise.all(files.map(f => isDirectory(f)))
    const directories = posibledirectories.filter(val => val)
    console.log(directories)
}

// readDir(myDir)
//     .then(data => console.log(data))

execute()