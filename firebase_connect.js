const admin = require("firebase-admin");
const config = require("./config/firebase-config.json");

const db = admin.initializeApp(config).firestore();
const usersDb = db.collection('users') 
module.exports = usersDb;