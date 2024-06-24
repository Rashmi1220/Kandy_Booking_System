// firebaseAdmin.js
import admin from 'firebase-admin';

const serviceAccount = require('./path/to/your/serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://your-database-name.firebaseio.com"
});

export default admin;
