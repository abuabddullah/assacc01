const fs = require('fs')


//read the user data from json file
exports.saveUserData = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync('users.json', stringifyData)
}


//get the user data from json file
exports.getUserData = () => {
    const jsonData = fs.readFileSync('users.json')
    return JSON.parse(jsonData)
}