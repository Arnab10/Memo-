const test = (req,res) => {
    res.send('working. . .')
}

const greet =  (req, res) => {
    res.send('Hello World')
}

module.exports = {
    test,
    greet
}