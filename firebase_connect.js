const admin = require("firebase-admin");
const config = require("./config/firebase-config.json");

admin.initializeApp(config);

const db = admin.firestore();
const usersDb = db.collection('users').doc('TKQ25JsmYNdpxwZpHiav'); 
module.exports = usersDb;