const db = require('../firebase_connect');
const test = (req,res) => {
    res.send('working. . .')
}

const greet =  (req, res) => {
    res.send('Hello World')
}

const save = (req,res) =>{
        db.add(req.body)
    .then(res=>console.log("Added ok..."))
    .catch(err=>console.error(err))
    res.send("saved successfully...")
}

const get = async (req,res) =>{
  const users =  await db.doc('BGV1akhMl6fJkLEgmzsH').get();
res.send(users._fieldsProto)
}

module.exports = {
    test,
    greet,
    save,
    get
}