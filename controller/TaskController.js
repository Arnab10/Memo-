const db = require('../firebase_connect');
const test = (req,res) => {
    res.send('working. . .')
}

const greet =  (req, res) => {
    res.send('Hello World')
}

const save = (req,res) =>{
        db.set({
        username:"username",
        emailId:"emailId",
    })
    res.send("saved successfully...")
}

module.exports = {
    test,
    greet,
    save
}