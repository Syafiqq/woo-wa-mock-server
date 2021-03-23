module.exports = {
    port: process.env.PORT,
    apple: {
        shared_password_parent: process.env.APPLE_SHARED_PASSWORD_PARENT,
        shared_password_student: process.env.APPLE_SHARED_PASSWORD_STUDENT,
    },
    firebase: {
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        databaseURL: process.env.FIREBASE_DATABASE_URL,
        projectId: process.env.FIREBASE_PROJECT_ID,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.FIREBASE_APP_ID,
    },
    googleCloud: {
        privateKey: JSON.parse(process.env.GOOGLE_CLOUD_STORAGE_PRIVATE_KEY)
    }
};